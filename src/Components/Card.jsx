import React from "react";

function Card({ image, title, genre, releaseYear }) {
  return (
    <div>
      <img width="100" src={image} alt=""></img>
      <label> {title}</label>
      <label> {genre} </label>
      <label> {releaseYear}</label>
    </div>
  );
}

export default Card;
