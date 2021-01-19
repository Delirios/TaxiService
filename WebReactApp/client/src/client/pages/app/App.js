import { Router, Route, Switch } from "react-router-dom";
import { history } from "../../../services/utils/history";
import React, { Component } from "react";
import { Widget, addResponseMessage, addLinkSnippet } from "react-chat-widget";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HomePage from "../home/HomePage";
import NewsPage from "../news/NewsPage";
import AccountPage from "../account/AccountPage";
import WithTaxiService from "../../components/hoc-helpers/WithTaxiService";
import OrderPage from "../order/OrderPage";
import LoginPage from "../login/LoginPage";
import RegisterPage from "../registration/RegisterPage";
import PrivateRoute from "../../helpers/PrivateRoute";
import PricingPage from "../pricing/PricingPage";
import AdminPage from "../admin/AdminPage";
import Spinner from "../../components/spinner/Spinner";

import "react-chat-widget/lib/styles.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initLoading: true,
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ initLoading: false });
    }, 2500);
    addResponseMessage("How can we help you?");
  };

  handleNewUserMessage = () => {
    const responceMessage = {
      title: "Get into contact with me",
      link: "https://www.linkedin.com/in/dmytro-lushchevskyi-86a30b1b2/",
      target: "_blank",
    };
    addLinkSnippet(responceMessage);
  };

  render() {
    if (this.state.initLoading) {
      return <Spinner />;
    }
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          title="Taxi Tech Support"
          subtitle="Please leave your message"
        />
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/news" component={NewsPage} />
            <PrivateRoute exact path="/order" component={OrderPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/pricing" component={PricingPage} />
            <Route path="/admin" component={AdminPage} />
            <PrivateRoute exact path="/account" component={AccountPage} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default WithTaxiService()(App);
