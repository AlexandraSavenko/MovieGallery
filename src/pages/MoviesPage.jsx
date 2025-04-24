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
  // const [errorQuery, setErrorQuery] = useState(null);
  // const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const [params, setSearchParams] = useSearchParams();
  const movieName = params.get("movieName");

  const movies = useSelector(moviesArr)
  async function handleSubmit(value) {
    if (!value.trim()) {
      // setErrorQuery(true);
      return;
    }
    // setErrorQuery(null);
    setSearchParams({ movieName: value });
  }

  useEffect(() => {
    if (!movieName) return;
    dispatch(fetchMoviesList({page: 1, query: movieName, endPoint: 'search/movie'}))
  }, [movieName]);
  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {/* {errorQuery && <p>You need to fill in your query!</p>}
      {error && <b>Error!!!</b>}
      {loading && <b>LOADING...</b>} */}
      {movieName && movies.length > 0 && <MovieList allMovies={movies} />}
    </div>
  );
}
