import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HomePage from "../home/HomePage";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import News from "../../components/news/News";
import WithTaxiService from "../../components/hoc-helpers/WithTaxiService";

const App = ({ taxiService }) => {
  taxiService.getNews().then((data) => {
    console.log(data);
  });
  taxiService.getCategories().then((data) => {
    console.log(data);
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route path="/news" component={News}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default WithTaxiService()(App);
