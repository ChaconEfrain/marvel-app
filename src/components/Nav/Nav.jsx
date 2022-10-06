// import general_img from "../../images/Universo_Marvel.png";
import cap from "../../images/cap.png";
import hulk from "../../images/hulk.png";
import ironman from "../../images/ironman.png";
import spider from "../../images/spider.png";
import thor from "../../images/thor.png";
import capmarvel from "../../images/cap_marvel.png";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.navBar}>
      <div className={s.imageContainer}>
        <img className={s.navImage} src={cap} alt="Captain America" />
        <img className={s.navImage} src={hulk} alt="Hulk" />
        <img className={s.navImage} src={ironman} alt="Iron man" />
        {/* <img className={s.navImage} src={general_img} alt="Universo marvel" /> */}
        <img className={s.navImage} src={spider} alt="Spiderman" />
        <img className={s.navImage} src={thor} alt="Thor" />
        <img className={s.navImage} src={capmarvel} alt="Captain Marvel" />
      </div>
      <ul className={s.navMenu}>
        <li>Characters</li>
        <li>Comics</li>
        <li>Creators</li>
        <li>Events</li>
        <li>Series</li>
        <li>Stories</li>
      </ul>
    </nav>
  );
};

export default Nav;
