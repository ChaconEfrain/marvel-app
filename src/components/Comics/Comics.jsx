import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComics } from "../../redux/action_creators";
import Comic from "../Comic/Comic";
import s from "./Comics.module.css";

const Comics = () => {
  const dispatch = useDispatch();
  const comics = useSelector((state) => state.comics);
  const [input, setInput] = useState("");

  if (!comics.length) dispatch(getComics("spider"));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getComics(input));
    setInput("");
    document.querySelector("input").blur();
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form className={s.formContainer} onSubmit={(e) => handleSubmit(e)}>
        <input
          className={s.comicInput}
          type="text"
          placeholder="Search by character..."
          value={input}
          onChange={(e) => handleInput(e)}
        />
        {/* <input type="submit" className={s.inputIcon} value="🔍" /> */}
      </form>
      <div className={s.cardsContainer}>
        {comics &&
          comics.map((comic) => (
            <Comic
              key={comic.id}
              id={comic.id}
              prices={comic.prices}
              poster={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              title={comic.title}
            />
          ))}
      </div>
    </div>
  );
};

export default Comics;
