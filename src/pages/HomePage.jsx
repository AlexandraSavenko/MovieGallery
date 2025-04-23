import { useEffect, useState } from "react";
// import { fetchdata } from "../fetchdata";
import MovieList from "../components/MovieList/MovieList";
import { useDispatch } from "react-redux";
import { fetchMoviesList } from "../redux/MoviesOps";
export default function HomePage() {

  const dispatch = useDispatch()


  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    dispatch(fetchMoviesList({page: 1, query: '', endPoint: 'search/movie'}))
    // async function fetchedData() {
    //   try {
    //     setLoading(true);
    //     setError(false);
    //     const data = await fetchdata(
    //       1,
    //       "",
    //       "trending/movie/day?language=en-US"
    //     );
    //     setTrendingMovies(data.results);
    //   } catch (error) {
    //     setError(error.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // fetchedData();
  }, []);
  return (
    <div>
      <h2>Trending films</h2>
      {error && <b>Sorry, something went wrong. Please, try again!</b>}
      {loading && <b>LOADING...</b>}
      {trendingMovies.length > 0 && <MovieList allMovies={trendingMovies} />}
    </div>
  );
}
