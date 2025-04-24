import { useEffect } from "react";
import { getInfo } from "../../redux/MoviesOps";
import { useParams } from "react-router-dom";
import CastList from "../CastList/CastList";
import css from "./MovieCast.module.css";
import { useDispatch, useSelector } from "react-redux";
import { movieCa } from "../../redux/MoviesSlice";

export default function MovieCast() {

  const { movieId } = useParams();

  const movieCast = useSelector(movieCa)
  console.log(movieCast)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!movieId) return;
    dispatch(getInfo({movieId, endPoint: 'credits'}))
  }, [movieId]);
  return (
    <div>
      <ul className={css.list}>
        {movieCast.length > 0 ? (
          movieCast.map((actor) => (
            <li className={css.item} key={actor.id}>
              {<CastList info={actor} />}
            </li>
          ))
        ) : (
          <p>Sorry, but we don`t have information about the cast☹️ </p>
        )}
      </ul>
    </div>
  );
}
