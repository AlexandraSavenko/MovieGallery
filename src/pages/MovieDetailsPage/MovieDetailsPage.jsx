import { useEffect, useRef } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovie } from "../../redux/MoviesOps";
import css from "./MovieDetailsPage.module.css";
// import NotFoundPage from "../NotFoundPage";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { theMovie, theMovieData } from "../../redux/MoviesSlice";


export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state);
  const { movieId } = useParams();
  // const [genres, setGenres] = useState([]);
  // const [score, setScore] = useState(0);
  // const [posterPath, setPosterPath] = useState("");

  const dispatch = useDispatch()
  const movieData = useSelector(theMovie)
  const {genre, userScore, posterPath} = useSelector(theMovieData)
  // const movieInfo = () => {
  //   if(!movieData) return;
  //       const movieGen = movieData.genres.map((genre) => genre.name).join(", ");
  //       setGenres(movieGen);
  //       const userScore = Math.floor(movieData.vote_average);
  //       setScore(`User score: ${userScore}%`);
  //       setPosterPath(movieData.poster_path);
  // }
  
  useEffect(() => {
    dispatch(getMovie(movieId));
    // movieInfo()
  }, [movieId]);

  function linksActive(props) {
    return clsx(css.link, props.isActive && css.isActive);
  }

  return (
    movieData && (
      <div className={css.wrap}>
        <Link className={css.goBackLink} to={backLinkRef.current ?? "/"}>
          Go back
        </Link>
        <div className={css.innerWrap}>
        <div className={css.movieInfoWrap}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${posterPath}`}
            alt="movie_poster"
          />
          <ul>
            <li>
              <h2>
                {movieData.original_title}{" "}
                <span>{`(${Number.parseInt(movieData.release_date)})`}</span>
              </h2>
            </li>
            <li>
              <p>{`User score: ${userScore}%`}</p>
            </li>
            <li>
              <h3>Overview</h3>
            </li>
            <li>
              <p>{movieData.overview}</p>
            </li>
            <li>
              <h4>Geners</h4>
            </li>
            <li>
              <p>{genre}</p>
            </li>
          </ul>
        </div>
        <div className={css.addWrap}>
          <p>Additional information:</p>
          <ul className={css.addList}>
            <li><NavLink className={linksActive} to="cast">
              Cast
            </NavLink>
            </li>
            <li><NavLink className={linksActive} to="reviews">
              Reviews
            </NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
        </div>
      </div>
    )
  );
}
