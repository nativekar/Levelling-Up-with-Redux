import React from "react";
import Card from "./Card";
import logo from "../logo.svg";

function GamesList({ games }) {
  return (
    <div>
      {games &&
        games.map((game) => (
          <Card
            image={logo}
            title={game.title}
            genre={game.genre}
            releaseYear={game.release_year}
          />
        ))}
    </div>
  );
}

export default GamesList;
