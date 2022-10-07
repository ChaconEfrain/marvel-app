import s from "./Comic.module.css";

const Comic = ({ poster, title }) => {
  return (
    <article className={s.card}>
      <img className={s.poster} src={poster} alt={title} />
      <span className={s.charName}>{title}</span>
    </article>
  );
};

export default Comic;
