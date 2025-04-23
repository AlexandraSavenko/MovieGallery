import { Link, useLocation } from "react-router-dom";
import css from './MovieList.module.css'
export default function MovieList({ allMovies }) {
  const location = useLocation();
const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <ul className={css.list}>
      {allMovies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <img  src={`${baseUrl}${movie.poster_path}`} alt="" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
