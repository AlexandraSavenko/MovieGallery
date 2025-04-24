import { createSlice } from "@reduxjs/toolkit";
import {fetchMoviesList} from './MoviesOps'

export const moviesArr = state => state.movies.moviesList

const MoviesSlice = createSlice({
    name: 'moviesList',
    initialState: {
        moviesList: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMoviesList.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchMoviesList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.moviesList = []
            state.moviesList = action.payload.results;
        })
        .addCase(fetchMoviesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default MoviesSlice.reducer