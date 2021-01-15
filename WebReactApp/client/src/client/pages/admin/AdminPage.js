import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addCar } from "../../redux/actions/admin";

import { fetchCategories, fetchCars } from "../../redux/actions/category";

import WithTaxiService from "../../components/hoc-helpers/WithTaxiService";
import compose from "../../../services/utils/compose";

import "./AdminPage.css";
import CardItem from "../../components/card-item/CardItem";
import CategoryItem from "../../components/category-item/CategoryItem";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: "",
      category: "",
      image: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount = async () => {
    await this.props.fetchCategories();
    await this.props.fetchCars();
    console.log(this.props.categories);
    console.log(this.props.cars);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { addCar } = this.props;
    const { image, model, category } = this.state;
    console.log(this.state);
    const body = {
      model,
      category,
      image,
    };
    addCar(body);
  };
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    console.log(this.state);
  };
  setFile = ({ target }) => {
    console.log(target.files);
    this.setState({ image: target.files[0] });
    console.log(this.state.image);
  };

  onChangeUser(event) {
    console.log(event.target.value);
  }
  deleteDriver(carId){

  }
  render() {
    const { cars,categories } = this.props;
    console.log(cars);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="main col ">
            <h1>Drivers</h1>
            <div class="container album py-5 bg-light">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
                {cars?.map((cardItem) => {
                  return (
                    <div key={cardItem.carId}>
                      <CardItem
                        cardItemName={cardItem.model}
                        cardItemImageName={cardItem.imageName}
                        cardItemDelete ={this.deleteDriver}
                        cardItemId = {cardItem.carId}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="container-fluid py-2">
              <h1>Add Car</h1>
              <div className="row add-car">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Model</label>
                    <input
                      name="model"
                      type="text"
                      className="form-control"
                      placeholder="model"
                      onChange={this.handleChange}
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
                  <div className="form-group">
                    <label>Photo</label>
                    <input
                      name="image"
                      type="file"
                      className="form-control-file"
                      onChange={this.setFile}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Замовити
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ categoriesReducer: { categories, cars },
  adminReducer: { cars }, }) => {
  return { categories, cars };
};
const mapDispatchToProps = (dispatch, { taxiService }) => {
  return bindActionCreators(
    {
      addCar: (values) => dispatch(addCar(taxiService, values)),
      fetchCategories: fetchCategories(taxiService),
      fetchCars: fetchCars(taxiService),
    },
    dispatch
  );
};
export default compose(
  WithTaxiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(AdminPage);
