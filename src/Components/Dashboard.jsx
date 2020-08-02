import React, { useEffect, useState } from "react";
import GamesList from "./GamesList";

const Dashboard = () => {
  const [gameData, setGameData] = useState([]);
  useEffect(() => {
    fetch("http://starlord.hackerearth.com/gamesext")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGameData(data.slice(0, 54));
      });
  }, []);

  return (
    <div>
      <h1>List of all games available to download!</h1>
      <GamesList games={gameData} />
    </div>
  );
};

export default Dashboard;
