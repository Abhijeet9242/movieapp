import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies,getAllShows } from '../store/movies/moviesSlice';
import MovieCard from "./MovieCard";
import "./MovieListing.css";

const MovieListing = () => {

  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)
  // console.log("moscccsvie",movies)

  let renderMovies = "";
  let renderShows = ""

  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie,index)=>(
      <MovieCard key={index} data={movie}/>
    ))
  ) : (
    <div className="movies-error"><h3>{movies.Error}</h3></div>
  );

  //shows
  renderShows = shows.Response === "True" ? (
    shows.Search.map((show,index)=>(
      <MovieCard key={index} data={show}/>
    ))
  ) : (
    <div className="movies-error"><h3>{shows.Error}</h3></div>
  );

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
      </div>
        <div className='movie-container'>{renderMovies}</div>

        <div className='show-list'>
        <h2>Shows</h2>
      </div>
        <div className='movie-container'>{renderShows}</div>
      
    </div>
  )
}

export default MovieListing