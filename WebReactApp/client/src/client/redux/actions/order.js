const orderCreated = (request) => {
  return {
    type: "CREATE_ORDER",
    payload: request,
  };
};

const createOrders = (taxiService, newOrder,user) => () => (dispatch) => {
  taxiService
    .createOrder(newOrder,user)
    .then((data) => dispatch(orderCreated(data)));
};

export { createOrders };
