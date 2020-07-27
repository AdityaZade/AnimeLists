import React from "react";
import Card from "./Card.jsx"
import anime from "../Anime"



function App() {
  return <div>
    <h1 className="heading">My Anime Lists</h1>
    <Card
      name={anime[0].name}
      img={anime[0].img}
      genre={anime[0].genre}
      time={anime[0].time}
    />
    <Card
      name={anime[1].name}
      img={anime[1].img}
      genre={anime[1].genre}
      time={anime[1].time}
    />
    <Card
      name={anime[2].name}
      img={anime[2].img}
      genre={anime[2].genre}
      time={anime[2].time}
    />
    <Card
      name={anime[3].name}
      img={anime[3].img}
      genre={anime[3].genre}
      time={anime[3].time}
    />
  </div>
}

export default App;
