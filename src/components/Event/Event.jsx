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
  const characterInfo = useSelector((state) => state.character);
  const character = characters.items[0].name;

  const [clicked, setClicked] = useState(false);

  if (clicked) console.log("hizo fetch");
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <article className={s.cardContainer}>
      <div>
        <img className={s.cardImage} src={poster} alt={title} />
      </div>
      <div className={s.cardContent}>
        <span className={s.cardTitle}>{title}</span>
        <p className={s.description}>{description}</p>
        <div className={s.cardMenu}>
          <span onClick={handleClick} className={s.characters}>
            Characters involved
          </span>
          <div className={s.comicsDiv}></div>
          <span>Comics involved</span>
        </div>
        <div className={`${s.charDiv} ${clicked && s.charDivDisplay}`}>
          <button className={s.charButtons}>{"<"}</button>
          <button className={s.charButtons}>{">"}</button>
        </div>
      </div>
    </article>
  );
};

export default Event;
