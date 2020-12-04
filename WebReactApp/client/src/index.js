import React from "react";
import ReactDOM from "react-dom";
import App from "./client/pages/app/App";
import NewsApi from "./api/news/NewsApi";

const getResource = async (url) => {
  const res = await fetch(url);
  const body = await res.json();
  return body;
};

getResource("http://localhost:8082/news").then((body) => {
});


const news = new NewsApi();

const res = news.getNews();
console.log(res);

ReactDOM.render(<App />, document.getElementById("root"));
