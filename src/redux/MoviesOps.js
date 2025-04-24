import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGFhZmRkZmM4ODFlNzU3OTU1M2Y0ZDY5YzhlNTJkNCIsIm5iZiI6MTcyNTQxNzQ3Mi42NjM4MTEsInN1YiI6IjY2ZDdiN2QxZjU5ZjE2Y2JkODE4MTU2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wjjTc3rKo32j385EY1Qwn7ZBeE_4C6lp3ZmvPSKU4CE";

export const fetchMoviesList = createAsyncThunk(
    'movies/fetchMovies',
async ({page = 1, query = "", endPoint}, thunkAPI) => {
    try {
        const response = await axios.get(`${endPoint}`, {
            params: {
                page,
                query,
            }
        })
        // console.log(response.data)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}
)


export const getMovie = createAsyncThunk(
    'movies/getMovie',
    async (movieId, thunkAPI) => {
      try {
        const response = await axios.get(`/movie/${movieId}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const getInfo = createAsyncThunk(
    'movies/getInfo',
    async ({movieId, endPoint}, thunkAPI) => {
      try {
        const response = await axios.get(`/movie/${movieId}/${endPoint}`, {
            params: { language: "en-US" },
          });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  