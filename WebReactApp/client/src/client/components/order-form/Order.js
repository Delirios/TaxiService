/* global google */
import Autocomplete from "../../components/google-autocomplete/Autocomplete";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createOrders } from "../../redux/actions/order";
import { Link } from "react-router-dom";

import WithTaxiService from "../hoc-helpers/WithTaxiService";
import compose from "../../../services/utils/compose";

import "./Order.css";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromCoordinates: null,
      toCoordinates: null,
      distance: 0,
      price: 0,
      destinationAddresses: "",
      originAddresses: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  calculatePrice = async (fromCoordinates, toCoordinates) => {
    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [fromCoordinates],
        destinations: [toCoordinates],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
      },
      (response, status) => {
        //console.log(response);
        if (status === "OK" && response.rows[0].elements[0].status === "OK") {
          const price =
            20 + (5 * response.rows[0].elements[0].distance.value) / 1000;
          const distance = response.rows[0].elements[0].distance.value / 1000;

          this.setState({
            distance: distance,
            price: price,
            destinationAddresses: response.destinationAddresses[0],
            originAddresses: response.originAddresses[0],
          });
        } else {
          alert("IMPOSIBLE");
        }
      }
    );
  };

  getDataToPage = (values, name) => {
    //console.log(name, values);
    this.setState({ [name]: values });
    //console.log(this.state);
    const { fromCoordinates, toCoordinates } = this.state;
    //console.log(fromCoordinates, toCoordinates);
    if (fromCoordinates !== null && toCoordinates !== null) {
      this.calculatePrice(fromCoordinates, toCoordinates);
    }
  };

  handleSubmit(event) {
    event.preventDefault();
    const { user, createOrders } = this.props;
    //console.log(user);
    createOrders(this.state, user);
  }
  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { price, distance } = this.state;
    return (
      <section className="order">
        <form onSubmit={this.handleSubmit}>
          <Link to="/home" className="btn btn-primary ">
            Відмінити
          </Link>
          <h1>Price = {price} ГРН</h1>
          <h1>Distance = {distance} КМ</h1>
          <div className="form-group">
            <label>From</label>
            <Autocomplete
              name="fromCoordinates"
              getDataToPage={this.getDataToPage}
            />
          </div>
          <div className="form-group">
            <label>To</label>
            <Autocomplete
              name="toCoordinates"
              getDataToPage={this.getDataToPage}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Замовити
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = ({ userReducer: { user } }) => {
  return { user };
};
const mapDispatchToProps = (dispatch, { taxiService }) => {
  return bindActionCreators(
    {
      createOrders: (values, user) =>
        dispatch(createOrders(taxiService, values, user)),
    },
    dispatch
  );
};
export default compose(
  WithTaxiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(Order);
