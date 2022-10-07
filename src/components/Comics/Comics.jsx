import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComics } from "../../redux/action_creators";
import Comic from "../Comic/Comic";
import s from "./Comics.module.css";

const Comics = () => {
  const dispatch = useDispatch();
  const comics = useSelector((state) => state.comics);

  useEffect(() => {
    dispatch(getComics("digital comic"));
  }, []);

  return (
    <div className={s.cardsContainer}>
      {comics &&
        comics.map((comic) => (
          <Comic
            key={comic.id}
            poster={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            title={comic.title}
          />
        ))}
    </div>
  );
};

export default Comics;
