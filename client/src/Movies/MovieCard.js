import React from 'react';

const MovieCard = props => {
  const placeholder={title: "", director: "", metascore:"",stars:""};
  const { title, director, metascore, stars } = props.movie || placeholder;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars && stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button" onClick={e => {
        e.preventDefault();
        props.addToSavedList(props.movie); 
        }}>Save</div>
    </div>
  );
};

export default MovieCard;
