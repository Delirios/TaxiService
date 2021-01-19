import React from "react";

const NewsItem = ({ newsItem }) => {
  const { link, title, articleId } = newsItem;
  return (
    <a
      href={link}
      target="_blank"
      className="list-group-item list-group-item-action flex-column align-items-start"
      key={articleId}
    >
      <div className="d-flex w-100 justify-content-between">
        <h4 className="mb-1">{title}</h4>
      </div>
    </a>
  );
};
export default NewsItem;
