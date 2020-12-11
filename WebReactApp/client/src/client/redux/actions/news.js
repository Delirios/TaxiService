const newsLoaded = (newNews) => {
  return {
    type: "NEWS_LOADED",
    payload: newNews,
  };
};

export { newsLoaded };
