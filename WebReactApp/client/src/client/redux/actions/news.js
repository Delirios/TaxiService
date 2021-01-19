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

const fetchNews = (taxiService) => () => async (dispatch) => {
  dispatch(newsRequested());
  const news = await taxiService.getNews();
  dispatch(newsLoaded(news));
};

export { fetchNews };
