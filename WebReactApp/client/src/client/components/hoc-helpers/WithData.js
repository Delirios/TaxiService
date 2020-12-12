import React, { Component } from "react";
import TaxiService from "../../../services/taxi-service/TaxiService";

const WithData = (View, getData) => {
  return class extends Component {
    news = new TaxiService();
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
