import "./App.css";
import MoviePosters from "./components/MoviePosters/MoviePosters";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import { originals, actions, romance, comedy, horror, MostPopular } from "./urls";
import React, { useState } from "react";
import { useEffect } from "react";
import { API_KEY, imageUrl } from "./components/constants/constants";
import axios from "./axios";
import { mainMovieNumValue } from "./commonValues";
import {Routes,Route} from 'react-router-dom'
import Favourites from "./components/Favourites/Favourites";

function App() {
  const [movieBanner, setMovieBanner] = useState([]);
  const [favoMovie, setFavoMovie] = useState([])

  function favMovie (props) {
    setFavoMovie()
  }

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovieBanner(response.data.results[mainMovieNumValue]);
      });
  }, []);
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${
          movieBanner ? imageUrl + movieBanner.backdrop_path : ""
        })`,
      }}
    >
      <NavBar />
      <Banner />
      <MoviePosters favMovie={favMovie} url={originals} title="Netflix Originals" />
      <MoviePosters favMovie={favMovie} url={actions} title="Action Movies" isSmall={true} />
      <MoviePosters favMovie={favMovie} url={romance} title="Romance Movies" isSmall={true} />
      <MoviePosters favMovie={favMovie} url={comedy} title="Comedy Movies" isSmall={true} />
      <MoviePosters favMovie={favMovie} url={horror} title="Horror Movies" isSmall={true} />
      <Routes>
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
