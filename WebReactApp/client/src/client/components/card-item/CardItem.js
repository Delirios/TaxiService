import React from "react";

const CardItem = ({
  cardItemName,
  cardItemImageName,
  cardItemValues,
  cardItemLink,
  cardItemDelete,
  cardItemId,
}) => {
  if (cardItemDelete === undefined) {
    return (
      <div className="col">
        <div className="card shadow-sm">
          <img src={cardItemImageName} width="100%" height="250" alt="error" />
          <div className="card-body">
            <p className="card-text">{cardItemName}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <a
                  href={cardItemLink}
                  target="_blank"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </a>
              </div>
              <h3 className="text-muted">{cardItemValues}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={cardItemImageName} width="100%" height="250" alt="error" />
        <div className="card-body">
          <p className="card-text">{cardItemName}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button
                className="btn btn-primary"
                onClick={() => cardItemDelete(cardItemId)}
              >
                Delete
              </button>
            </div>
            <h3 className="text-muted">{cardItemValues}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardItem;
