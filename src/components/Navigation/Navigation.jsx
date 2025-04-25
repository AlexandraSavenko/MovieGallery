import { NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import css from "./Navigation.module.css";
import clsx from "clsx";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
function getNavLinkCl(props) {
  return clsx(css.link, props.isActive && css.isActive);
}
export default function Navigation() {
  return (
    <header className={css.header}>
      <ul className={css.list}>
        <li>
          <NavLink className={getNavLinkCl} to="/">
          <IoIosHome className={css.homeIcon} />
          <span>ome</span> 
          </NavLink>
        </li>
        <li>
          <NavLink className={getNavLinkCl} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
      <ThemeSwitcher/>
    </header>
  );
}
