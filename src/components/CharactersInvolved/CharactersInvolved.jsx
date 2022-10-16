import s from "./CharactersInvolved.module.css";

const CharactersInvolved = ({
  thumbnail,
  name,
  handleClickPrevious,
  handleClickNext,
  handleClose,
}) => {
  return (
    <>
      <button onClick={handleClose} className={s.closeButtonChar}>
        x
      </button>
      <img className={s.charImage} src={thumbnail} alt={name} />
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
      <span className={s.charSpan}>{name}</span>
    </>
  );
};

export default CharactersInvolved;
