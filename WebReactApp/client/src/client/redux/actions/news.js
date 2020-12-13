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
const categoriesRequested = () => {
  return {
    type: "FETCH_CATEGORIES_REQUEST",
  };
};

const categoriesLoaded = (newCategories) => {
  return {
    type: "FETCH_CATEGORIES_SUCCESS",
    payload: newCategories,
  };
};

const fetchNews = (dispatch, taxiService) => () => {
  dispatch(newsRequested());
  taxiService.getNews().then((data) => dispatch(newsLoaded(data)));
};

const fetchCategories = (dispatch, taxiService) => () => {
  dispatch(categoriesRequested());
  taxiService.getCategories().then((data) => dispatch(categoriesLoaded(data)));
};

export { fetchNews, categoriesLoaded,fetchCategories };
