import React from "react";

function Card(props) {
  return <div>

    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img"
          src={props.img}
          alt="avatar_img"
        />
      </div>
      <div className="bottom">
        <p className="info">{props.time}</p>
        <p className="info">{props.genre}</p>

      </div>
    </div>
  </div>
}



function App() {
  return <div>
    <h1 className="heading">My Anime Lists</h1>
    <Card
      name="Mushi-shi"
      img="https://vignette.wikia.nocookie.net/mushi-shi/images/4/46/4cac9fcd3f875d8185e3796f438cc4bcc28c9c66_hq.jpg/revision/latest/scale-to-width-down/340?cb=20180226024442"
      genre="Mystry,Adventure fiction, Slice of life, Occult Fiction"
      time="Around early July 2020"
    />
    <Card
      name="Hyouka"
      img="https://cdn.myanimelist.net/images/anime/13/50521.jpg"
      genre="Mystry, Slice of life"
      time="Mid-July 2020"
    />
    <Card
      name="Terror in Ressonance"
      img="https://upload.wikimedia.org/wikipedia/en/e/e6/Terror_in_Resonance_Poster.jpg"
      genre="Mystry,Pshychological,Thriller"
      time="late July 2020"
    />
    <Card
      name="Violet Evergarden"
      img="https://m.media-amazon.com/images/M/MV5BZmUzMThjOTItZGY4ZS00ODcwLTliNTMtYjVkM2JmY2QxNmRhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg"
      genre="Slice of life,Romance"
      time="Late June 2020"
    />
  </div>
}

export default App;
