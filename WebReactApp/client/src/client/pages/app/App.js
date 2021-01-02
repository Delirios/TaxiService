import { Router, Route, Switch } from "react-router-dom";
import { history } from "../../../services/utils/history";

import React from "react";
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

import "./App.css";
import PricingPage from "../pricing/PricingPage";
import AdminPage from "../admin/AdminPage";

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
          <Route path="/news" component={NewsPage} />
          <PrivateRoute exact path="/order" component={OrderPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path ="/pricing" component={PricingPage}/>       
          <Route path ="/admin" component={AdminPage}/>               
          <Route path ="/account" component={AccountPage}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default WithTaxiService()(App);
