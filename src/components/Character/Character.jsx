import s from "./Character.module.css";

const Character = ({ name, poster }) => {
  return (
    <article className={s.card}>
      <img className={s.poster} src={poster} alt={name} />
      <span className={s.charName}>{name}</span>
    </article>
  );
};

export default Character;
