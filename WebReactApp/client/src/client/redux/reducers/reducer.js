const initialState = {
  news: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEWS_LOADED":
      return {
        news: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
