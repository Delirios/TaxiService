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

const fetchCategories = (dispatch, taxiService) => () => {
  dispatch(categoriesRequested());
  taxiService.getCategories().then((data) => dispatch(categoriesLoaded(data)));
};

export { categoriesLoaded, fetchCategories };
