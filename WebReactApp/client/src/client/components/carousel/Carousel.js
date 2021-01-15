import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCategories } from "../../redux/actions/catalog";

import { Link } from "react-router-dom";
import compose from "../../../services/utils/compose";
import WithTaxiService from "../hoc-helpers/WithTaxiService";

import "./Carousel.css";

const CustomCarousel = ({ items }) => {
  return (
    <section className="jumbotron text-center">
      <Carousel>{items}</Carousel>
    </section>
  );
};

class CarouselComponent extends Component {
  componentDidMount = async () => {
    console.log(this.props);
    this.props.fetchCategories();

    console.log(this.props);
  };

  render() {
    const { categories } = this.props;
    console.log(categories);
    const items = categories?.map(({ categoryId, name, price, imageName }) => {
      return (
        <Carousel.Item key={categoryId}>
          <img
            className="d-block w-100"
            src={imageName}
            alt={name}
            width="100%"
            height="500"
          />
          <Carousel.Caption>
          <p>Price = {price}</p>
            <Link to="/admin">
              <h1 className ="h1-color">{name}</h1>
            </Link>
            
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
    return <CustomCarousel items={items} />;
  }
}
const mapStateToProps = ({ catalogReducer: { categories } }) => {
  return { categories };
};
const mapDispatchToProps = (dispatch, { taxiService }) => {
  return bindActionCreators(
    {
      fetchCategories: fetchCategories(taxiService),
    },
    dispatch
  );
};
export default compose(
  WithTaxiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CarouselComponent);
