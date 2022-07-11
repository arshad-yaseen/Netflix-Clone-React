import React, { useState } from "react";
import "./Banner.css";
import { useEffect } from "react";
import { API_KEY } from "../../components/constants/constants";
import axios from "../../axios";
import { mainMovieNumValue } from "../../commonValues";
import Youtube from "react-youtube";
import { resultsValue } from "../../resultValue";
import {useNavigate} from 'react-router-dom'

function Banner(props) {
  const [bannerId, setBannerId] = useState("");
  const [bannerKey, setBannerKey] = useState("");
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data.results[mainMovieNumValue]);
      });
  }, []);

  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <div className="banner-texts-wrapper">
        <h1 className="movie-title-banner">
          {movie ? movie.title || movie.name : ""}
        </h1>
        <div className="banner-description-wrapper">
          <p className="movie-description-banner">
            {movie ? movie.overview : ""}
          </p>
        </div>
      </div>

      <button
        className="watch-btn-banner"
        onClick={() => {
          axios
            .get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
              setBannerId(response.data.results[mainMovieNumValue].id);
            });

          axios
            .get(`/movie/${bannerId}/videos?api_key=${API_KEY}&language=en-US`)
            .then((respon) => {
              setBannerKey(respon.data.results[resultsValue].key);
            });
        }}
        poster_path
      >
        {" "}
        <i class="fas fa-play-circle"></i> Watch now
      </button>
      <button onClick={()=>{
        
      }} className="moreinfo-btn-banner">
        {" "}
        <i class="fas fa-info-circle"></i>More Information
      </button>

      <button
        onClick={() => {
          props.showFavo()
        }}
        className="favo-btn-banner"
      >
        {" "}
        <i class="fas fa-heart"></i> Favourites
      </button>

      {bannerKey && (
        <Youtube className="banner-frame" opts={opts} videoId={bannerKey} />
      )}
      {bannerKey && (
        <div className="banner-controls-remover">
          <div className="banner-controls-wrapper">
            <div className="banner-control-squares">
              <i
                onClick={() => {
                  setBannerKey("");
                }}
                class="fas fa-pause-circle"
              ></i>
            </div>

            <div className="banner-control-squares">
              <i class="fas fa-info-circle"></i>
            </div>
            <div className="banner-control-squares">
              <i class="fas fa-heart"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Banner;
