import React from "react";

const CardItem = ({
  cardItemName,
  cardItemImageName,
  cardItemValues,
  cardItemLink,
  cardItemDelete,
  cardItemId
}) => {
  console.log(cardItemName, cardItemImageName, cardItemValues, cardItemLink);
  if(cardItemDelete === undefined){
  return (
    <div class="col">
      <div class="card shadow-sm">
        <img src={cardItemImageName} width="100%" height="250" alt="error" />
        <div class="card-body">
          <p class="card-text">{cardItemName}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <a
                href={cardItemLink}
                target="_blank"
                class="btn btn-sm btn-outline-secondary"
              >
                View
              </a>
            </div>
            <h3 class="text-muted">{cardItemValues}</h3>
          </div>
        </div>
      </div>
    </div>
  );
  }
  return (
    <div class="col">
      <div class="card shadow-sm">
        <img src={cardItemImageName} width="100%" height="250" alt="error" />
        <div class="card-body">
          <p class="card-text">{cardItemName}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <button
              className ="btn btn-primary"
                onClick = {()=> cardItemDelete(cardItemId)}
              >
                Delete
              </button>
            </div>
            <h3 class="text-muted">{cardItemValues}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardItem;
