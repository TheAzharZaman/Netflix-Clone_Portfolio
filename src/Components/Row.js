import React, { useState, useEffect } from 'react';
import axios from '../axios';

const base_url = "https://image.tmdb.org/t/p/original"

const Row = ({ title, fetchURL, isVerticalAndLargeRow }) => {

    // Stores Movies info until reload 

    const [movies, setMovies] = useState([])

    // Stores Movies info until reload *


    // Fetch Movies Data once per load of screen or Row 

    useEffect(() => {
        async function fetchData() {
           const request = await axios.get(fetchURL)
           setMovies(request.data.results)
           return request
        }
        fetchData();
    }, [fetchURL]) //Here bracket is for dependencies; (if empty) mean no dependency (code runs once loaded just)

    // Fetch Movies Data once per load of screen or Row *

    console.log(movies)

    //  Row Component Basic Structure 

    return (
        <div className='Row-main-container'>
            {/* Title */}
            <h2 className='Row-Title'>
                {title}
            </h2>

            <div className='Row__posters__container'>
                {movies.map(movie => (
                    <img key={movie.id} className={`Row__poster ${isVerticalAndLargeRow && 'Large__poster'}`} src={`${base_url}${ isVerticalAndLargeRow ? movie.poster_path : movie.backdrop_path }`} alt={movie.name} />
                ))}
            </div>
        </div>
    )

    //  Row Component Basic Structure *

}

export default Row
