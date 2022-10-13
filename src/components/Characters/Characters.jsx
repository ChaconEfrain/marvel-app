import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../redux/action_creators";
import Character from "../Character/Character";
import s from "./Characters.module.css";

const Characters = () => {
  // const abecedary = "abcdefghijklmnopqrstuvwxyz";
  // const randomIndex = Math.floor(Math.random() * abecedary.length);
  // const randomLetter = abecedary[randomIndex];
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(getCharacters("spider"));
  }, []);

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
    <div>
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
              poster={`${char.thumbnail.path}.${char.thumbnail.extension}`}
              name={char.name}
            />
          ))}
      </div>
    </div>
  );
};

export default Characters;
