/* global google */
import Autocomplete from "../../components/google-autocomplete/Autocomplete";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createOrders } from "../../redux/actions/order";
import { Link } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import { fetchCategories } from "../../redux/actions/catalog";

import CategoryItem from "../../components/category-item/CategoryItem";
import WithTaxiService from "../hoc-helpers/WithTaxiService";
import compose from "../../../services/utils/compose";
import Notification from "../notification/Notification";

import "../../../../node_modules/react-notifications/lib/notifications.css";
import "./Order.css";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromCoordinates: null,
      toCoordinates: null,
      distance: 0,
      price: 0,
      categoryPrice: 50,
      destinationAddresses: "",
      originAddresses: "",
      category: "",
    };
  }
  componentDidMount = () => {
    const { fetchCategories } = this.props;
    fetchCategories();
  };

  calculatePrice = async (fromCoordinates, toCoordinates) => {
    const service = new google.maps.DistanceMatrixService();
    const { categoryPrice } = this.state;
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
        if (status === "OK" && response.rows[0].elements[0].status === "OK") {
          console.log((5 * response.rows[0].elements[0].distance.value) / 1000);
          const finalPrice =
            categoryPrice +
            (5 * response.rows[0].elements[0].distance.value) / 1000;
          const distance = response.rows[0].elements[0].distance.value / 1000;

          this.setState({
            distance: distance,
            price: finalPrice,
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
    this.setState({ [name]: values });
    const { fromCoordinates, toCoordinates, categoryPrice } = this.state;
    if (
      fromCoordinates !== null &&
      toCoordinates !== null &&
      categoryPrice !== null
    ) {
      this.calculatePrice(fromCoordinates, toCoordinates);
    }
  };
  getPrice = (id) => {
    const { categories } = this.props;
    const result = categories.find(
      (category) => category.categoryId === parseInt(id)
    );
    return result;
  };
  handleChange = ({ target }) => {
    const category = this.getPrice(target.value);
    this.setState({ categoryPrice: category.price });
    const { fromCoordinates, toCoordinates } = this.state;
    if (
      fromCoordinates !== null &&
      toCoordinates !== null &&
      category.price !== 50
    ) {
      this.calculatePrice(fromCoordinates, toCoordinates);
    }
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    var user = JSON.parse(localStorage.getItem("user"));
    const { createOrders } = this.props;
    await createOrders(this.state, user);
  };

  render() {
    const { categories } = this.props;
    const { price, distance } = this.state;
    return (
      <div className="order-background">
        <div className="row container  py-3 px-4">
          <div className="col-6 py-4">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col">
                  <h1 className="order-color">Price = {price} ГРН</h1>
                </div>
                <div className="col">
                  <h1 className="order-color">Distance = {distance} КМ</h1>
                </div>
              </div>
              <div className="form-group">
                <h3 className="order-color">From</h3>
                <Autocomplete
                  name="fromCoordinates"
                  getDataToPage={this.getDataToPage}
                />
              </div>
              <div className="form-group">
                <h3 className="order-color">To</h3>
                <Autocomplete
                  name="toCoordinates"
                  getDataToPage={this.getDataToPage}
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select
                  className="form-control"
                  onChange={this.handleChange}
                  name="category"
                >
                  <CategoryItem categories={categories} />
                </select>
              </div>
              <div className="form-row">
                <div className="col">
                  <Link to="/home" className="btn btn-primary ">
                    Відмінити
                  </Link>
                </div>
                <div className="col">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={Notification(this.props.orderStatus)}
                  >
                    Замовити
                  </button>
                  <NotificationContainer />
                </div>
              </div>
            </form>
          </div>
          <div className="main col py-4">
            <div>
              <h1 className="order-color">Google Maps</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  catalogReducer: { categories },
  orderReducer: { orderStatus },
}) => {
  return { categories, orderStatus };
};
const mapDispatchToProps = (dispatch, { taxiService }) => {
  return bindActionCreators(
    {
      createOrders: (values, user) =>
        dispatch(createOrders(taxiService, values, user)),

      fetchCategories: fetchCategories(taxiService),
    },
    dispatch
  );
};
export default compose(
  WithTaxiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(Order);
