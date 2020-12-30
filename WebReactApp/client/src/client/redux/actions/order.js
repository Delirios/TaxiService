import { history } from '../../../services/utils/history';
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
    history.push("/");
};

export { createOrders };
