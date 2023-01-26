import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getCharacterComics,
  resetCharacterComics,
  getCharacterEvents,
  resetCharacterEvents,
  addCharacterToFavourites,
} from "../../redux/action_creators";
import s from "./Character.module.css";

const Character = ({ name, poster, id }) => {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favouriteCharacters);
  const [addedToFavIcon, setAddedToFavIcon] = useState(false);

  const handleCharacterComicsClick = () => {
    dispatch(resetCharacterComics());
    dispatch(getCharacterComics(id));
  };

  const handleCharacterEventsClick = () => {
    dispatch(resetCharacterEvents());
    dispatch(getCharacterEvents(id));
  };

  const handleFavourites = () => {
    const existingChar = favs.some((char) => char.id === id);
    if (existingChar) return;
    dispatch(addCharacterToFavourites(id));
    console.log(name);
    setAddedToFavIcon(true);
    setTimeout(() => {
      setAddedToFavIcon(false);
    }, 1000);
  };

  return (
    <article className={s.card}>
      <img className={s.poster} src={poster} alt={name} />
      <span className={s.charName}>{name}</span>
      <div className={s.charOptions}>
        <NavLink to={`/character/${name}/comics`} className={s.link}>
          <span onClick={handleCharacterComicsClick}>Character comics ↗</span>
        </NavLink>
        <NavLink to={`/character/${name}/events`} className={s.link}>
          <span onClick={handleCharacterEventsClick}>Character events ↗</span>
        </NavLink>
        <span onClick={handleFavourites} className={s.favButton}>
          Add to favourites
        </span>
        <span className={`${s.favIcon} ${addedToFavIcon && s.favIconClicked}`}>
          ⭐
        </span>
      </div>
    </article>
  );
};

export default Character;
