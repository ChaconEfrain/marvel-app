import { NavLink } from "react-router-dom";
import s from "./Character.module.css";

const Character = ({ name, poster, id }) => {
  return (
    <article className={s.card}>
      <img className={s.poster} src={poster} alt={name} />
      <span className={s.charName}>{name}</span>
      <div className={s.charOptions}>
        <NavLink to={`/character/${id}/comics`} className={s.link}>
          <span>Character comics ↗</span>
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
