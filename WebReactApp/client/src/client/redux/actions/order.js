const orderRequested = () => {
  return {
    type: "ORDER_REQUEST",
  };
};
const orderFailed = (request) => {
  return {
    type: "CREATE_ORDER_FAILURE",
    payload: request,
  };
};
const orderCreated = (request) => {
  return {
    type: "CREATE_ORDER_SUCCESS",
    payload: request,
  };
};

const orderLoaded = (requst) => {
  return {
    type: "FETCH_ORDERS_SUCCESS",
    payload: requst,
  };
};

const fetchOrders = (taxiService, user) => () => async (dispatch) => {
  dispatch(orderRequested());
  console.log(user);
  let orders = await taxiService.getOrders(user);
  dispatch(orderLoaded(orders));
};

const createOrders = (taxiService, newOrder, user) => () => async (
  dispatch
) => {
  dispatch(orderRequested());
  let responce = await taxiService.createOrder(newOrder, user);
  dispatch(orderCreated(responce));
};

export { createOrders, fetchOrders };
