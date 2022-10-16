import { NavLink } from "react-router-dom";
import s from "./Comic.module.css";

const Comic = ({ poster, title, id, prices }) => {
  return (
    <article className={s.card}>
      <img className={s.poster} src={poster} alt={title} />
      <span className={s.comicTitle}>{title}</span>
      <div className={s.comicOptions}>
        <NavLink to={`/comic/${id}/characters`} className={s.link}>
          <span>Comic creators ↗</span>
        </NavLink>
        <span className={s.favButton}>Add to favourites ⭐</span>
        <span>Comic price: {Number(prices[0].price) || "N/A"}</span>
      </div>
    </article>
  );
};

export default Comic;
