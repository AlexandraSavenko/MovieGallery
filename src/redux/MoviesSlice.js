import { createSlice } from "@reduxjs/toolkit";
import {fetchMoviesList} from './MoviesOps'



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
            state.weatherData = action.payload;
        })
        .addCase(fetchMoviesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default MoviesSlice.reducer