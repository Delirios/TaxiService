/* global google */
import Autocomplete from "../../components/google-autocomplete/Autocomplete";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createOrders } from "../../redux/actions/order";
import { Link } from "react-router-dom";

import { fetchCategories } from "../../redux/actions/category";
import CategoryItem from "../../components/category-item/CategoryItem"

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
      categoryPrice: 50,
      destinationAddresses: "",
      originAddresses: "",
      category: ""
    };
  }
  componentDidMount=()=>{
    this.props.fetchCategories();
    console.log(this.props.categories);
    console.log(this.state.category)
  }

  calculatePrice = async (fromCoordinates, toCoordinates) => {
    const service = new google.maps.DistanceMatrixService();
    const {categoryPrice} = this.state;
    console.log(categoryPrice)
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
        console.log(response);
        if (status === "OK" && response.rows[0].elements[0].status === "OK") {
          console.log((5 * response.rows[0].elements[0].distance.value) / 1000)
          const finalPrice =
             categoryPrice + (5 * response.rows[0].elements[0].distance.value) / 1000;
            console.log(finalPrice)
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
    //console.log(name, values);
    this.setState({ [name]: values });
    //console.log(this.state);
    const { fromCoordinates, toCoordinates,categoryPrice } = this.state;
    console.log(this.state)
    //console.log(fromCoordinates, toCoordinates);
    if (fromCoordinates !== null && toCoordinates !== null && categoryPrice!== null) {
      this.calculatePrice(fromCoordinates, toCoordinates);
    }
  };
  getPrice=(id)=>{
    console.log(id)
    console.log(this.props.categories)
    const result = this.props.categories.find(category => category.categoryId === parseInt(id))
    return result;
  }
  handleChange = ({ target }) => {
    console.log(target)
    const category = this.getPrice(target.value)
    console.log(category.price)
    this.setState({ categoryPrice : category.price });
    console.log(this.state);
    const { fromCoordinates, toCoordinates} = this.state;
    //console.log(fromCoordinates, toCoordinates);
    if (fromCoordinates !== null && toCoordinates !== null && category.price!== 50) {
      this.calculatePrice(fromCoordinates, toCoordinates);
    }
  };

  handleSubmit=(event)=>{
    event.preventDefault();
    var user =  JSON.parse(localStorage.getItem('user'));
    const {createOrders } = this.props;
    //console.log(user);
    createOrders(this.state, user);
  }

  render() {
    const{categories} = this.props
    const { price, distance } = this.state;
    return (
      <div className="order-background">
      <div className="row container  py-3 px-4">
        <div className="col-6 py-4">
          <form onSubmit={this.handleSubmit}>
            <div class="row">
              <div class="col">
                <h1 className="order-color">Price = {price} ГРН</h1>
              </div>
              <div class="col">
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
            <div class="form-row">
              <div class="col">
                <Link to="/home" className="btn btn-primary ">
                  Відмінити
                </Link>
              </div>
              <div class="col">
                <button type="submit" className="btn btn-primary">
                  Замовити
                </button>
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

const mapStateToProps = ({categoriesReducer: {categories}}) => {
  return {categories };
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
