import { createStore } from "redux";

const newsLoaded = (newNews) => {
  return {
    type: "FETCH_NEWS_SUCCESS",
    payload: newNews,
  };
};

const newsRequested = () => {
  return {
    type: "FETCH_NEWS_REQUEST",
  };
};
const categoriesRequested = () => {
  return {
    type: "FETCH_CATEGORIES_REQUEST",
  };
};

const categoriesLoaded = (newCategories) => {
  return {
    type: "FETCH_CATEGORIES_SUCCESS",
    payload: newCategories,
  };
};

const orderCreated = (request) => {
  return {
    type: "CREATE_ORDER",
    payload: request,
  };
};


const createOrders = (taxiService, newOrder) => () => (dispatch) => {
  taxiService
    .createOrder(newOrder)
    .then((data) => dispatch(orderCreated(data)));
};

const fetchNews = (taxiService) => () => (dispatch) => {
  dispatch(newsRequested());
  taxiService.getNews().then((data) => dispatch(newsLoaded(data)));
};

const fetchCategories = (dispatch, taxiService) => () => {
  dispatch(categoriesRequested());
  taxiService.getCategories().then((data) => dispatch(categoriesLoaded(data)));
};

export { fetchNews, categoriesLoaded, fetchCategories, createOrders };
