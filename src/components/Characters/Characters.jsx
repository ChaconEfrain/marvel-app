import { useEffect } from "react";
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

  useEffect(() => {
    dispatch(getCharacters("spider"));
  }, []);

  // const posterPathLastSentence =

  return (
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
  );
};

export default Characters;