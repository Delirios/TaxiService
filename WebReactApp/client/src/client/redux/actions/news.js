const newsLoaded = (newNews) => {
  return {
    type: "FETCH_NEWS_SUCCESS",
    payload: newNews,
  };
};

const newsRequested = () => {
  return {
    type: "FETCH_NEWS_REQUEST",
  };
};

const fetchNews = (taxiService) => () => (dispatch) => {
  dispatch(newsRequested());
  taxiService.getNews().then((data) => dispatch(newsLoaded(data)));
};

export { fetchNews };
