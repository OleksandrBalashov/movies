import { configureStore } from '@reduxjs/toolkit';
import { movieDetailsReducer, moviesReducer } from './movies/movies-reducers';
import audInfReducer from './audInformation/audInf-reducers';
import configuration from './configuration/configuration-reducer';
import searchQueryReducer from './searchMovies/searchMovies-reducres';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
    searchQuery: searchQueryReducer,
    // searchMovies: searchMoviesReducer,
    audInf: audInfReducer,
    configuration,
    devTools: process.env.NODE_ENV !== 'production',
  },
});

export default store;
