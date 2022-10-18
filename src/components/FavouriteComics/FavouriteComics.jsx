import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./FavouriteComics.module.css";

const FavouriteComics = () => {
  const comics = useSelector((state) => state.favouriteComics);

  return (
    <div className={s.cardsContainer}>
      {comics &&
        comics.map((comic) => (
          <article key={comic.id} className={s.card}>
            <img
              className={s.poster}
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
            <span className={s.comicTitle}>{comic.title}</span>
            <div className={s.comicOptions}>
              {/* <NavLink to={`/comic/${comic.id}/characters`} className={s.link}>
                <span>Comic creators ↗</span>
              </NavLink> */}
              <span>Comic price: {Number(comic.prices[0].price) || "N/A"}</span>
            </div>
          </article>
        ))}
    </div>
  );
};

export default FavouriteComics;
