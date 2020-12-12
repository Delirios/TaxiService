const initialState = {
  news: [],
  categories: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEWS_LOADED":
      return {
        news: action.payload,
      };

    case "CATEGORIES_LOADED":
      return {
        categories: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
