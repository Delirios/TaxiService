import React, { Component } from "react";
import CarCatalogService from "../../../services/car-catalog/CarCatalogService";
import { Carousel } from "react-bootstrap";

export default class Category extends Component {
  carCatalogService = new CarCatalogService();

  state = {
    categoryList: null,
  };

  componentDidMount() {
    this.carCatalogService.getCategories().then((categoryList) => {
      this.setState({
        categoryList,
      });
      console.log(categoryList);
    });
  }

  renderItems(arr) {
    if (arr)
      return arr.map(({ categoryId, name, price, cars }) => {
        return (
          <Carousel.Item key={categoryId}>
            <Carousel.Caption>
              <h3>{name}</h3>
              <p>
                {price} ,Nulla vitae elit libero, a pharetra augue mollis
                interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      });
  }

  render() {
    const { categoryList } = this.state;

    const items = this.renderItems(categoryList);

    return (
      <section className="jumbotron text-center">
        <Carousel>
            {items}
        </Carousel>
      </section>
    );
  }
}
