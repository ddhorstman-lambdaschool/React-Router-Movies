import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../index.css"
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link key={movie.id} className="no-decoration" to={`/movies/${movie.id}`} >
          <MovieCard addToSavedList={props.addToSavedList} key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
}


export default MovieList;
