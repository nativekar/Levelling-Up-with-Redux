import React from "react";

function Card({ image, title, genre, releaseYear }) {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="content">
        <label>
          {" "}
          {title && title.length > 20 ? `${title.substring(0, 18)}...` : title}
        </label>
        <label> {genre} </label>
        <label> {releaseYear}</label>
      </div>
    </div>
  );
}

export default Card;
