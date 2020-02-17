import React from 'react';
import {Link} from "react-router-dom";
import "../index.css";
const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      //props.list.find(movie) ? null :
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link className="no-decoration" to="/">
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
