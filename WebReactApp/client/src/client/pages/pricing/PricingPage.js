import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchCategories, fetchCars } from "../../redux/actions/catalog";

import CardItem from "../../components/card-item/CardItem";
import WithTaxiService from "../../components/hoc-helpers/WithTaxiService";
import compose from "../../../services/utils/compose";

import "./PricingPage.css";

class PricingPage extends Component {
  componentDidMount = async () => {
    const { fetchCategories } = this.props;
    await fetchCategories();
  };

  render() {
    const { categories } = this.props;
    return (
      <div class="album py-5 bg-light Pricing-background">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {categories?.map((cardItem) => {
              return (
                <div key={cardItem.categoryId}>
                  <CardItem
                    cardItemName={cardItem.name}
                    cardItemImageName={cardItem.imageName}
                    cardItemValues={cardItem.price}
                  ></CardItem>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ catalogReducer: { categories, cars } }) => {
  return { categories, cars };
};
const mapDispatchToProps = (dispatch, { taxiService }) => {
  return bindActionCreators(
    {
      fetchCategories: fetchCategories(taxiService),
      fetchCars: fetchCars(taxiService),
    },
    dispatch
  );
};
export default compose(
  WithTaxiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(PricingPage);
