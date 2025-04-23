import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './MoviesSlice'

export const store = configureStore({
    reducer: {
        movies: moviesReducer
    },
});