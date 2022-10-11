import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "../../redux/action_creators";
import s from "./Event.module.css";

const Event = ({
  title,
  creators,
  description,
  comics,
  characters,
  poster,
}) => {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.character);

  //State that controls the "Characters involved" modal.
  const [clicked, setClicked] = useState(false);
  //State that controls the "next" button on the "Characters involved" modal.
  const [next, setNext] = useState(1);
  //State that controls the "previous" button on the "Characters involved" modal.
  const [previous, setPrevious] = useState(next);

  //Functions to handle clicks on the "Characters involved" elements.
  const handleClickChars = () => {
    setClicked(!clicked);
    if (!clicked) {
      dispatch(getCharacter(characters.items[0].name));
      setNext(1);
      setPrevious(next);
    }
  };

  const handleClickNextChar = () => {
    dispatch(getCharacter(characters.items[next].name));
    if (next === characters.items.length - 1) setNext(0);
    else setNext((last) => last + 1);
  };

  const handleClickPreviousChar = () => {
    dispatch(getCharacter(characters.items[previous].name));
    if (previous === 0) setPrevious(characters.items.length - 1);
    else setPrevious((last) => last - 1);
  };

  //Event listener to close the "Characters involved" modal with the esc key.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && clicked) setClicked(false);
  });

  return (
    <article className={s.cardContainer}>
      <div>
        <img className={s.cardImage} src={poster} alt={title} />
      </div>
      <div className={s.cardContent}>
        <span className={s.cardTitle}>{title}</span>
        <p className={s.description}>{description}</p>
        <div className={s.cardMenu}>
          <span onClick={handleClickChars} className={s.characters}>
            Characters involved
          </span>
          <div className={s.comicsDiv}></div>
          <span>Comics involved</span>
        </div>
        <div className={`${s.charDiv} ${clicked && s.charDivDisplay}`}>
          <button onClick={handleClickPreviousChar} className={s.charButtons}>
            {"<"}
          </button>
          {Object.keys(character).length && (
            <img
              className={s.charImage}
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
          )}
          <span className={s.charSpan}>{character.name}</span>
          <button onClick={handleClickNextChar} className={s.charButtons}>
            {">"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default Event;
