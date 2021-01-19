import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchNews } from "../../redux/actions/news";

import CardItem from "../../components/card-item/CardItem";
import WithTaxiService from "../../components/hoc-helpers/WithTaxiService";
import compose from "../../../services/utils/compose";

import "./NewsPage.css";

class NewsPage extends Component {
  componentDidMount = async () => {
    const { fetchNews } = this.props;
    await fetchNews();
  };

  render() {
    const { news } = this.props;
    return (
      <div className="album py-5 bg-light Pricing-background">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {news?.map((cardItem) => {
              return (
                <div key={cardItem.articleId}>
                  <CardItem
                    cardItemName={cardItem.title}
                    cardItemImageName={cardItem.imageName}
                    cardItemLink={cardItem.link}
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

const mapStateToProps = ({ newsReducer: { news, loading } }) => {
  return { news, loading };
};

const mapDispatchToProps = (dispatch, { taxiService }) => {
  return bindActionCreators(
    {
      fetchNews: fetchNews(taxiService),
    },
    dispatch
  );
};
export default compose(
  WithTaxiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(NewsPage);
