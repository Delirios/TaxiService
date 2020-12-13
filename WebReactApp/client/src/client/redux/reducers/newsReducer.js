const initialState = {
    news: [],
    loading: true,
  };


  const newsReducer = (state = initialState, action) => {
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
  
      default:
        return state;
    }
  };
  
  export default newsReducer