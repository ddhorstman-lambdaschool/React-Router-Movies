import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

import { Route } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
   savedList.find(existingMovie => existingMovie === movie) ||
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={addToSavedList} />} />
        <Route exact path="/" render={() => <MovieList addToSavedList={addToSavedList} />} />
      </div>
    </div>
  );
};

export default App;
