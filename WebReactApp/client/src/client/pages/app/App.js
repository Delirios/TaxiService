import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HomePage from "../home/HomePage";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import News from "../../components/news/News";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route path ="/news" component= {News}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
