import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/app/App";

const getResource = async (url) => {
  const res = await fetch(url);
  const body = await res.json();
  return body;
};

getResource("http://localhost:8082/news").then((body) => {
  console.log(body);
});

ReactDOM.render(<App />, document.getElementById("root"));
