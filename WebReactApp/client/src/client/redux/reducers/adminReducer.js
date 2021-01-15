const initialState = {
    cars:[]
  };
  
  const adminReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CAR":
        return {
          ...state,
          cars: action.payload,
        };
        case "DELETE_CAR":
        return {
          ...state,
          cars: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default adminReducer;