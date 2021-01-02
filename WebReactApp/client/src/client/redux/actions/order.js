import { history } from '../../../services/utils/history';
import React from 'react';

const orderRequested = (request) => {
  return {
    type: "CREATE_ORDER_REQUEST"
  };
};
const orderFailed = (request) => {
  return {
    type: "CREATE_ORDER_FAILURE"
  };
};
const orderCreated = (request) => {
  return {
    type: "CREATE_ORDER_SUCCESS"
  };
};
const createOrders = (taxiService, newOrder,user) => () => (dispatch) => {
  dispatch(orderRequested());
  taxiService
    .createOrder(newOrder,user)
    .then((data) => dispatch(orderCreated(data)));
    //history.push("/");
};

export { createOrders };
