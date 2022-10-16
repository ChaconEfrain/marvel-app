import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getCharacterComics,
  resetCharacterComics,
} from "../../redux/action_creators";
import s from "./Character.module.css";

const Character = ({ name, poster, id }) => {
  const dispatch = useDispatch();

  const handleCharacterComicsClick = () => {
    dispatch(resetCharacterComics());
    dispatch(getCharacterComics(id));
  };

  return (
    <article className={s.card}>
      <img className={s.poster} src={poster} alt={name} />
      <span className={s.charName}>{name}</span>
      <div className={s.charOptions}>
        <NavLink to={`/character/${name}/comics`} className={s.link}>
          <span onClick={handleCharacterComicsClick}>Character comics ↗</span>
        </NavLink>
        <NavLink to={`/character/${id}/events`} className={s.link}>
          <span>Character events ↗</span>
        </NavLink>
        <span className={s.favButton}>Add to favourites ⭐</span>
      </div>
    </article>
  );
};

export default Character;
