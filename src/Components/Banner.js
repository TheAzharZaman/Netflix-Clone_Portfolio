import React, {useEffect, useState} from 'react'
import axios from '../axios'
import requests from '../requests'

// const bg_Base_URL= 'https://image.tmdb.org/t/p/original/'

const Banner = () => {
   
    const [movie , setMovie] = useState([]);

    useEffect(() => {
       async function fetchData () {
           const request= await axios.get(requests.fetchActionMovies);
           setMovie(
               request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
               )
           return request
       }
       fetchData();
    } , [])

    console.log(movie)
    
    return (
        <header className='Banner'
          style={{
              backgroundSize: 'cover',
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
              backgroundPosition: 'center center'
          }}
        >


            <div className='Banner__foreground__content'>
                <h1 className='Banner__title'> {movie?.title || movie?.name || movie?.original_name} </h1>
                <div className='Banner__btns__wrapper'>
                    <button className='Banner__btn'>Play</button>
                    <button className='Banner__btn'>My List</button>
                </div>
                <h1 className='Banner__description'>
                    {movie?.overview}
                </h1>
            </div>
        </header>
    )
}

export default Banner
