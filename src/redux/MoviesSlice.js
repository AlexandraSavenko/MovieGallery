import { createSlice } from "@reduxjs/toolkit";
import {fetchMoviesList} from './MoviesOps'
import { getMovie } from "../redux/MoviesOps";
import { getInfo } from "../redux/MoviesOps";

export const moviesArr = state => state.movies.moviesList;
export const theMovie = state => state.movies.movieDetails;
export const cast = state => state.movies.movieCast;
export const reviews = state => state.movies.movieReviews;



const MoviesSlice = createSlice({
    name: 'moviesList',
    initialState: {
        moviesList: [],
        isLoading: false,
        error: null,
        movieDetails: null,
        movieCast: [],
        movieReviews: []
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
        .addCase(getMovie.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(getMovie.fulfilled, (state, action) => {
            state.isLoading = false;
            state.movieDetails = action.payload;            
          })
          .addCase(getMovie.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
          .addCase(getInfo.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(getInfo.fulfilled, (state, action) => {
            state.isLoading = false;
            // state.movieInfo = [];
            // state.movieInfo = action.payload; 
            if (action.meta.arg.endPoint === 'credits') {
                state.movieCast = action.payload.cast;
            } 
            else if (action.meta.arg.endPoint === 'reviews') {
                state.movieReviews = action.payload.results;
            }           
          })
          .addCase(getInfo.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
    }
})

export default MoviesSlice.reducer