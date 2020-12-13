const initialState = {
  news: [],
  categories: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NEWS_REQUEST":
      return {
        ...state,
        news: [],
        loading: true,
      };

    case "FETCH_NEWS_SUCCESS":
      return {
        ...state,
        news: action.payload,
        loading: false,
      };

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

export default reducer;
