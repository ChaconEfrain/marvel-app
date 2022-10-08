import { useState } from "react";
import { NavLink } from "react-router-dom";
import cap from "../../images/cap.png";
import hulk from "../../images/hulk.png";
import ironman from "../../images/ironman.png";
import spider from "../../images/spider.png";
import thor from "../../images/thor.png";
import capmarvel from "../../images/cap_marvel.png";
import s from "./Nav.module.css";

const Nav = () => {
  const handleClick = (e) => {
    document
      .querySelectorAll("li")
      .forEach((li) => li.classList.remove(s.active));

    e.target.classList.add(s.active);
  };

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
      <ul onClick={(e) => handleClick(e)} className={s.navMenu}>
        <NavLink className={s.navLink} to="/">
          <li>Characters</li>
        </NavLink>
        <NavLink className={s.navLink} to="/comics">
          <li>Comics</li>
        </NavLink>
        {/* <NavLink className={s.navLink} to="/creators">
          <li>Creators</li>
        </NavLink> */}
        <NavLink className={s.navLink} to="/events">
          <li>Events</li>
        </NavLink>
        {/* <NavLink className={s.navLink} to="/series">
          <li>Series</li>
        </NavLink> */}
        <NavLink className={s.navLink} to="/stories">
          <li>Stories</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
