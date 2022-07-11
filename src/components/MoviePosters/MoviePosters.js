import React from "react";
import "./MoviePosters.css";
import { useState, useEffect } from "react";
import axios from "../../axios";
import { API_KEY } from "../../components/constants/constants";
import Youtube from "react-youtube";
import { imageUrl } from "../constants/constants";
import Favourites from "../Favourites/Favourites";


function MoviePosters(props) {
  const [movie, setMovie] = useState([]);
  const [favoMovie, setFavoMovie] = useState([]);
  const [alertFavo, setAlertFavo] = useState(true);
  const test = "";
  let tr = false
  
  

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovie(response.data.results);
    });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0 | 0 | 0,
      info: 0n,
    },
  };
  const [id, setId] = useState("");
  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setId(response.data.results[0 || 1 || 2 || 3 || 4]);
        } else {
          alert("Trailer Is Not Available");
        }
      });
  };

  return (
    <div>

      <div className="posters-wrapper">
        <h2 className="posters-heading">{props.title}</h2>

        {movie.map((obj) => {
          return (
            <div className="poster-wrapper">
              <img
                id="poster"
                onClick={() => {
                  handleMovie(obj.id)
                  
                }}
                className={props.isSmall ? "smallPoster" : "poster"}
                src={`${imageUrl + obj.poster_path}`}
                alt=""
              />{" "}
              <div className="posterOpt" id="posterOpt">
                <i
                  onClick={() => {
                    handleMovie(obj.id)
                    setAlertFavo(false)
                    setFavoMovie([...favoMovie, obj])
                    props.favMovie(favoMovie)
                  }}
                  class="fas fa-play-circle"
                  id="posterPlay"
                ></i>

                <i onClick={() => {
                  if (alertFavo === true){
                    alert("Watch Trailer. Then Add To Favourites")
                  }else{
                    setAlertFavo(true)
                    alert("Added To Favourites")
                  }


                  


                }} class="fas fa-heart" id="posterHeart"></i>

                <i
                  onClick={() => {
                    
                  }}
                  class="fas fa-info-circle"
                  id="posterInfoCircle"
                ></i>
              </div>{" "}
              <img />
            </div>
          );
        })}
      </div>

      {id && (
        <Youtube
          id="youtubeVideo"
          className="youtube-video"
          videoId={id.key}
          opts={opts}
        />
      )}
      {id && (
        <div className="yt-video-wrapper">
          <button
            onClick={() => {
              setId("");
            }}
            className="yt-video-pause-btn"
          >
            {" "}
            <i class="fas fa-pause-circle"></i> Pause
          </button>
          <button className="more-information-btn">
            {" "}
            <i class="fas fa-info-circle"></i> More Information
          </button>
        </div>
      )}
      
    </div>

    
    
  );


  
}



export default MoviePosters; 

