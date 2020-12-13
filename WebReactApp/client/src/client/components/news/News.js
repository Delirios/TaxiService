import React, { Component } from "react";
import NewsItem from "../news-item/NewsItem";
import { connect } from "react-redux";
import WithTaxiService from "../hoc-helpers/WithTaxiService";
import { fetchNews } from "../../redux/actions/news";
import compose from "../../../services/utils/compose";
import { Spinner } from "react-bootstrap";

const News = ({ news }) => {
  console.log(news )
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
  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    const { news, loading } = this.props;
    if (loading) {
      return <Spinner />;
    }

    return <News news={news} />;
  }
}

const mapStateToProps = ({newsReducer:{ news, loading }}) => {
  return { news, loading };
};

const mapDispatchToProps = (dispatch, { taxiService }) => {
  return {
    fetchNews: fetchNews(dispatch, taxiService),
  };
};

export default compose(
  WithTaxiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(NewsContainer);
