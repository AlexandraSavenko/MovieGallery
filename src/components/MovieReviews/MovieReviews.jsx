import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getInfo } from "../../redux/MoviesOps";
import RevList from "../RevList/RevList";
import css from "./MovieReviews.module.css";
import { useDispatch, useSelector } from "react-redux";
import {  reviews } from "../../redux/MoviesSlice";

export default function MovieReviews() {

  const { movieId } = useParams();


  const dispatch = useDispatch()
const movieReviews = useSelector(reviews)
console.log(movieReviews)
  useEffect(() => {
    if (!movieId) return;
    dispatch(getInfo({movieId, endPoint: 'reviews'}))
  }, [movieId]);

  return (
    <div>
      <ul className={css.list}>
        {movieReviews && movieReviews.length > 0 ? (
          movieReviews.map((rev, index) => (
            <li className={css.item} key={rev.id || index}>
              <RevList info={rev} />
            </li>
          ))
        ) : (
          <p>
            We don’t have any reviews for this movie, but we hope you could
            leave one after you watch the film 🍿 😁
          </p>
        )}
      </ul>
    </div>
  );
}
