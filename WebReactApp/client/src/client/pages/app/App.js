import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HomePage from "../home/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
