import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter, getComic } from "../../redux/action_creators";
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
  const comic = useSelector((state) => state.comic);

  //State that controls the "Characters involved" and "Comics involved" modals.
  const [clicked, setClicked] = useState({
    charactersModal: false,
    comicsModal: false,
  });
  //State that controls the "next" button on the "Characters involved" modal.
  const [next, setNext] = useState(1);
  //State that controls the "previous" button on the "Characters involved" modal.
  const [previous, setPrevious] = useState(next);

  //Function to handle first click on the "Characters involved" span.
  const handleClickChars = () => {
    const name = characters.items[0].name;
    setClicked(
      clicked.comicsModal
        ? {
            comicsModal: !clicked.comicsModal,
            charactersModal: !clicked.charactersModal,
          }
        : { ...clicked, charactersModal: !clicked.charactersModal }
    );
    if (!clicked.charactersModal) {
      dispatch(getCharacter(name));
      setNext(1);
      next === 1 ? setPrevious(characters.items.length - 1) : setPrevious(next);
    }
  };

  //Function to handle first click on the "Comics involved" span.
  const handleClickComics = () => {
    const id = comics.items[0].resourceURI.split("/").pop();
    setClicked(
      clicked.charactersModal
        ? {
            comicsModal: !clicked.comicsModal,
            charactersModal: !clicked.charactersModal,
          }
        : { ...clicked, comicsModal: !clicked.comicsModal }
    );
    if (!clicked.comicsModal) {
      dispatch(getComic(id));
      setNext(1);
      next === 1 ? setPrevious(comics.items.length - 1) : setPrevious(next);
    }
  };

  //Functions to handle clicks on the "next" and "previous" buttons
  const handleClickNext = () => {
    if (clicked.charactersModal) {
      const name = characters.items[next].name;
      dispatch(getCharacter(name));
      if (next === characters.items.length - 1) setNext(0);
      else {
        setNext((last) => last + 1);
        setPrevious(next - 1);
      }
    } else if (clicked.comicsModal) {
      const id = comics.items[next].resourceURI.split("/").pop();
      dispatch(getComic(id));
      if (next === comics.items.length - 1) setNext(0);
      else {
        setNext((last) => last + 1);
        setPrevious(next - 1);
      }
    }
  };

  const handleClickPrevious = () => {
    if (clicked.charactersModal) {
      const name = characters.items[previous].name;
      dispatch(getCharacter(name));
      if (previous === 0) setPrevious(characters.items.length - 1);
      else {
        setPrevious((last) => last - 1);
        setNext(previous === characters.items.length - 1 ? 0 : previous + 1);
      }
    } else if (clicked.comicsModal) {
      const id = comics.items[previous].resourceURI.split("/").pop();
      dispatch(getComic(id));
      if (previous === 0) setPrevious(comics.items.length - 1);
      else {
        setPrevious((last) => last - 1);
        setNext(previous === characters.items.length - 1 ? 0 : previous + 1);
      }
    }
  };

  //Event listener to close the modals with the esc key.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && clicked.charactersModal)
      setClicked({ ...clicked, charactersModal: false });
    if (e.key === "Escape" && clicked.comicsModal)
      setClicked({ ...clicked, comicsModal: false });
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
          <span onClick={handleClickComics}>Comics involved</span>
        </div>
        <div
          className={`${s.charDiv} ${
            clicked.charactersModal && s.charDivDisplay
          }`}
        >
          <button onClick={handleClickPrevious} className={s.charButtons}>
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
          <button onClick={handleClickNext} className={s.charButtons}>
            {">"}
          </button>
        </div>
        <div
          className={`${s.comicDiv} ${
            clicked.comicsModal && s.comicDivDisplay
          }`}
        >
          <button onClick={handleClickPrevious} className={s.charButtons}>
            {"<"}
          </button>
          {Object.keys(comic).length && (
            <img
              className={s.comicImage}
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
          )}
          <span className={s.comicSpan}>{comic.title}</span>
          <button onClick={handleClickNext} className={s.charButtons}>
            {">"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default Event;
