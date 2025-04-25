import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
// import { fetchdata } from "../fetchdata";
import MovieList from "../components/MovieList/MovieList";
import SearchForm from "../components/SearchForm/SearchForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesList } from "../redux/MoviesOps";
import { moviesArr } from "../redux/MoviesSlice";

export default function MoviesPage() {
  // const location = useLocation();

  const dispatch = useDispatch()

  const [params, setSearchParams] = useSearchParams();
  const movieName = params.get("movieName");

  const movies = useSelector(moviesArr)
  async function handleSubmit(value) {
    if (!value.trim()) {
      return;
    }
    setSearchParams({ movieName: value });
  }

  useEffect(() => {
    if (!movieName) return;
    dispatch(fetchMoviesList({page: 1, query: movieName, endPoint: 'search/movie'}))
  }, [movieName]);
  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {movieName && movies.length > 0 && <MovieList allMovies={movies} />}
    </div>
  );
}
