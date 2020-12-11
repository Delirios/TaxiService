import React from "react";
import NewsService from "../../../services/news/NewsService";
import WithData from "../hoc-helpers/WithData";

const NewsItem = (props) => {
  const { data } = props;

const items = data?.map(({ articleId, title, link }) => {
    return (
      <a
        href={link}
        // eslint-disable-next-line react/jsx-no-target-blank
        target="_blank"
        className="list-group-item list-group-item-action flex-column align-items-start"
        key={articleId}
      >
        <div className="d-flex w-100 justify-content-between">
          <h4 className="mb-1">{title}</h4>
          <small>3 days ago</small>
        </div>
        <p className="mb-2">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </a>
    );
  });
  return items;
};

export default NewsItem;