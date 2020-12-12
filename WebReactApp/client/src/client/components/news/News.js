import React, { Component } from "react";
import NewsItem from "../news-item/NewsItem";
import { connect } from "react-redux";
import WithTaxiService from "../hoc-helpers/WithTaxiService";
import { newsLoaded } from "../../redux/actions/news";
import compose from "../../../services/utils/compose";

class News extends Component {
  componentDidMount = async () => {
    const { taxiService } = this.props;
    let data = await taxiService.getNews();
    console.log(data);

    this.props.newsLoaded(data);
  };

  render() {
    const { news } = this.props;
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
  }
}

const mapStateToProprs = ({ news }) => {
  return { news };
};

const mapDispatchToProps = {
  newsLoaded,
};

export default compose(
  WithTaxiService(),
  connect(mapStateToProprs, mapDispatchToProps)
)(News);
