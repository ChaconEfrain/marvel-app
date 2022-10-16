import s from "./ComicsInvolved.module.css";

const ComicsInvolved = ({
  title,
  thumbnail,
  handleClickNext,
  handleClickPrevious,
  handleClose,
}) => {
  return (
    <>
      <button onClick={handleClose} className={s.closeButtonComic}>
        x
      </button>
      <img className={s.comicImage} src={thumbnail} alt={title} />
      <div>
        <button
          onClick={handleClickPrevious}
          className={`${s.charButtons} ${s.buttonLeft}`}
        >
          {"<"}
        </button>
        <button
          onClick={handleClickNext}
          className={`${s.charButtons} ${s.buttonRight}`}
        >
          {">"}
        </button>
      </div>
      <span className={s.comicSpan}>{title}</span>
    </>
  );
};

export default ComicsInvolved;
