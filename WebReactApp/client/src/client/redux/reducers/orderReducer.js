const initialState = {
  orderStatus: "",
  orders : []
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ORDER_REQUEST":
      return {
        ...state
      };

    case "CREATE_ORDER_SUCCESS":
      return {
        ...state,
        orderStatus: action.payload,
      };
    case "CREATE_ORDER_FAILURE":
      return {
        ...state,
        orderStatus: action.payload,
      };
    case "FETCH_ORDERS_SUCCESS":
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;