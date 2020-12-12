const newsLoaded = (newNews) => {
  return {
    type: "NEWS_LOADED",
    payload: newNews,
  };
};
const categoriesLoaded = (newCategories) => {
  return {
    type: "CATEGORIES_LOADED",
    payload: newCategories,
  };
};

export { newsLoaded, categoriesLoaded };
