import { useEffect } from "react";
import MovieList from "../components/MovieList/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesList } from "../redux/MoviesOps";
import { moviesArr } from "../redux/MoviesSlice";
export default function HomePage() {

  const dispatch = useDispatch()
  const trendingMovies = useSelector(moviesArr)

  useEffect(() => {
    dispatch(fetchMoviesList({page: 1, query: '', endPoint: 'trending/movie/day?language=en-US'}))
  }, []);
  return (
    <div>
      <h2>Trending films</h2>
      {/* {error && <b>Sorry, something went wrong. Please, try again!</b>}
      {loading && <b>LOADING...</b>} */}
      {trendingMovies.length > 0 && <MovieList allMovies={trendingMovies} />}
    </div>
  );
}
