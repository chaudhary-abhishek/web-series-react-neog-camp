import React, { useState } from "react";
import "./styles.css";
//var userNameFromPrompt = prompt("Enter Name")

var webSeriesAvailable = {
  thrillers: [
    {
      name: "Stranger Things",
      rating: "8.7/10"
    },
    {
      name: "Sweet Home",
      rating: "7.3/10"
    },
    {
      name: "Money Heist",
      rating: "8.2/10"
    }
  ],

  crime: [
    {
      name: "The blacklist",
      rating: "8/10"
    },
    {
      name: "Criminal Minds",
      rating: "8.1/10"
    },
    {
      name: "Fargo",
      rating: "8.9/10"
    }
  ],

  drama: [
    {
      name: "The walking dead",
      rating: "8.1/10"
    },
    {
      name: "Breathe",
      rating: "8.3/10"
    },
    {
      name: "Black Mirror",
      rating: "8.8/10"
    }
  ]
};

var webSeriesArray = Object.keys(webSeriesAvailable);

export default function App() {
  const [selectedGenre, setGenre] = useState("drama");
  function onCLickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Must Watch Web Series</h1>
      <p>Click on particular genre to see recommendation</p>
      <div className="genreBox">
        {webSeriesArray.map(function (genre) {
          return (
            <button key={genre} onClick={() => onCLickHandler(genre)}>
              {genre}
            </button>
          );
        })}
      </div>
      <div className="seriesBox">
        <ul>
          {webSeriesAvailable[selectedGenre].map(function (series) {
            return (
              <li key={series.name}>
                <div>{series.name}</div>
                <div>{series.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
