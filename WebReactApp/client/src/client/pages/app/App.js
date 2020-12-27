import { Router, Route, Switch } from "react-router-dom";
import { history } from "../../../services/utils/history";

import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HomePage from "../home/HomePage";
import News from "../../components/news/News";
import WithTaxiService from "../../components/hoc-helpers/WithTaxiService";
import OrderPage from "../order/OrderPage";
import LoginPage from "../login/LoginPage";
import RegisterPage from "../registration/RegisterPage";
import PrivateRoute from "../../helpers/PrivateRoute";

import "./App.css";
import PricingPage from "../pricing/PricingPage";
import AboutPage from "../about/AboutPage";

const App = ({ taxiService }) => {
  taxiService.getNews().then((data) => {
    console.log(data);
  });
  taxiService.getCategories().then((data) => {
    console.log(data);
  });


  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/news" component={News} />
          <PrivateRoute exact path="/order" component={OrderPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path ="/pricing" component={PricingPage}/>       
          <Route path ="/about" component={AboutPage}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default WithTaxiService()(App);
