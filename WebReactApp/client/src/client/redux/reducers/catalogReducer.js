const initialState = {
  categories: [],
  cars: [],
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES_REQUEST":
      return {
        ...state,
        categories: [],
      };

    case "FETCH_CATEGORIES_SUCCESS":
      console.log(action.payload);
      return {
        ...state,
        categories: action.payload,
      };
    case "FETCH_CARS_REQUEST":
      return {
        ...state,
        cars: [],
      };

    case "FETCH_CARS_SUCCESS":
      console.log(action.payload);
      return {
        ...state,
        cars: action.payload,
      };

    case "ADD_CAR":
      return {
        ...state,
        //cars: action.payload,
      };

    case "DELETE_CAR":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default catalogReducer;
