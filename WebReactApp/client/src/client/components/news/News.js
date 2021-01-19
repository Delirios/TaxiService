import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNews } from "../../redux/actions/news";
import { Spinner } from "react-bootstrap";
import { bindActionCreators } from "redux";

import WithTaxiService from "../hoc-helpers/WithTaxiService";
import compose from "../../../services/utils/compose";
import NewsItem from "../news-item/NewsItem";

const News = ({ news }) => {
  return (
    <div className="list-group">
      {news?.map((newsItem) => {
        return (
          <div key={newsItem.articleId}>
            <NewsItem newsItem={newsItem}></NewsItem>
          </div>
        );
      })}
    </div>
  );
};

class NewsContainer extends Component {
  componentDidMount = async () => {
    const { fetchNews } = this.props;
    await fetchNews();
  };

  render() {
    const { news, loading } = this.props;
    if (loading) {
      return <Spinner />;
    }

    return <News news={news} />;
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
)(NewsContainer);
