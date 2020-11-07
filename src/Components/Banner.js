import React, { useEffect, useState } from "react";
import axios from "../Files/axios";
import requests from "../Files/requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchHorrorMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__foregroundContent">
        <h1 className="bannerTitle">
          {" "}
          {movie?.title || movie?.name || movie?.original_name}{" "}
        </h1>
        <div className="banner__btnsWrapper">
          <button className="bannerBtn">Play</button>
          <button className="bannerBtn">My List</button>
        </div>
        <h1 className="bannerDescription">
          {movie?.overview}
          {truncate(movie?.overview, 150)}
        </h1>
        <div className="banner__fade__bottom" id="banner__fade__bottom"></div>
      </div>
    </header>
  );
};

export default Banner;
