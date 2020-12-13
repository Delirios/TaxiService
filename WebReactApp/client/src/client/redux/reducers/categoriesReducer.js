const initialState = {
    categories: [],
  };


  const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_CATEGORIES_REQUEST":
            return{
              ...state,
              categories: []
            }
    
        case "FETCH_CATEGORIES_SUCCESS":
          return {
            ...state,
            categories: action.payload,
          };
    
        default:
          return state;
    }
  };
  
  export default categoriesReducer;