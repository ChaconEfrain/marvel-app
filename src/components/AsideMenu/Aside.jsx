import { NavLink } from "react-router-dom";
import s from "./Aside.module.css";

const Aside = () => {
  return (
    <aside>
      <ul className={s.asideMenu}>
        <NavLink className={s.link} to="/characters/favourites">
          <li>Favourite characters</li>
        </NavLink>
        <NavLink className={s.link} to="/comics/favourites">
          <li>Favourite comics</li>
        </NavLink>
      </ul>
    </aside>
  );
};

export default Aside;
