import React, { Component } from "react";
import NewsService from "../../../services/news/NewsService";

const WithData = (View, getData) => {
  return class extends Component {
    news = new NewsService();
    state = {
      data: null,
    };

    componentDidMount() {
      getData().then((data) => {
        this.setState({
          data,
        });
      });
    }
    render() {
      const { data } = this.state;

      return <View data={data} />;
    }
  };
};

export default WithData;
