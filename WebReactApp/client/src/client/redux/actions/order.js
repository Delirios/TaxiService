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

export { createOrders };
