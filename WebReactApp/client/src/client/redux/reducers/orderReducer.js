const initialState = {
  isCreated: false,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_ORDER_REQUEST":
      return {
        ...state,
        isCreated: false,
      };

    case "CREATE_ORDER_SUCCESS":
      console.log(action.payload);
      return {
        ...state,
        isCreated : true,
      };
    case "CREATE_ORDER_FAILURE":
      return {
        ...state,
        isCreated : false,
      };
    default:
      return state;
  }
};
