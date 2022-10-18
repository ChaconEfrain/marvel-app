import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters, resetCharacters } from "../../redux/action_creators";
import Character from "../Character/Character";
// import loadingImg from "../../images/loading-img.gif";
import s from "./Characters.module.css";

const Characters = () => {
  const abecedary = "abcdefghijklmnopqrstuvwxyz";
  const randomIndex = Math.floor(Math.random() * abecedary.length);
  const randomLetter = abecedary[randomIndex];
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const [input, setInput] = useState("");

  if (!characters.length) {
    dispatch(getCharacters(randomLetter));
  }

  // if (!characters.length)
  //   return <img className={s.loading_Img} src={loadingImg} alt="Loading" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCharacters(input));
    setInput("");
    document.querySelector("input").blur();
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={s.componentContainer}>
      <form className={s.formContainer} onSubmit={(e) => handleSubmit(e)}>
        <input
          className={s.charInput}
          type="text"
          placeholder="Search characters..."
          value={input}
          onChange={(e) => handleInput(e)}
        />
        {/* <input className={s.inputIcon} type="submit" value="🔍" /> */}
      </form>
      <div className={s.cardsContainer}>
        {characters &&
          characters.map((char) => (
            <Character
              key={char.id}
              id={char.id}
              poster={`${char.thumbnail.path}.${char.thumbnail.extension}`}
              name={char.name}
            />
          ))}
      </div>
    </div>
  );
};

export default Characters;
