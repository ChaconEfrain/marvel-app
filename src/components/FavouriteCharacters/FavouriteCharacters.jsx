import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getCharacterEvents,
  getCharacterComics,
  resetCharacterComics,
  resetCharacterEvents,
} from "../../redux/action_creators";
// import Character from "../Character/Character";
import s from "./FavouriteCharacters.module.css";

const FavouriteCharacters = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.favouriteCharacters);
  console.log(characters);

  const handleCharacterComicsClick = (id) => {
    dispatch(resetCharacterComics());
    dispatch(getCharacterComics(id));
  };

  const handleCharacterEventsClick = (id) => {
    dispatch(resetCharacterEvents());
    dispatch(getCharacterEvents(id));
  };

  return (
    <div className={s.cardsContainer}>
      {characters &&
        characters.map((char) => (
          <article key={char.id} className={s.card}>
            <img
              className={s.poster}
              src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
              alt={char.name}
            />
            <span className={s.charName}>{char.name}</span>
            <div className={s.charOptions}>
              <NavLink to={`/character/${char.name}/comics`} className={s.link}>
                <span onClick={() => handleCharacterComicsClick(char.id)}>
                  Character comics ↗
                </span>
              </NavLink>
              <NavLink to={`/character/${char.id}/events`} className={s.link}>
                <span onClick={() => handleCharacterEventsClick(char.id)}>
                  Character events ↗
                </span>
              </NavLink>
            </div>
          </article>
        ))}
    </div>
  );
};

export default FavouriteCharacters;
