import React, { Component } from "react";
import NewsService from "../../../services/news/NewsService";

export default class News extends Component {
  newsService = new NewsService();

  state = {
    newsList: null,
  };

  componentDidMount() {
    this.newsService.getNews().then((newsList) => {
      this.setState({
        newsList,
      });
    });
  }

  renderItems(arr) {
    if (arr)
      return arr.map(({ articleId, title, link }) => {
        return (
          <a
            href={link}
            target="_blank"
            className="list-group-item list-group-item-action flex-column align-items-start"
            key={articleId}
          >
            <div className="d-flex w-100 justify-content-between">
              <h4 className="mb-1">{title}</h4>
              <small>3 days ago</small>
            </div>
            <p className="mb-2">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small>Donec id elit non mi porta.</small>
          </a>
        );
      });
  }

  render() {
    const { newsList } = this.state;

    const items = this.renderItems(newsList);
    return <div className="list-group">{items}</div>;
  }
}
