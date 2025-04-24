import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './MoviesSlice'
// import searchMoviesReduser from './searchMoviesSlice'

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
       
        // searchMovies: searchMoviesReduser,
    }, 
    middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
              serializableCheck: false,
            }),
});