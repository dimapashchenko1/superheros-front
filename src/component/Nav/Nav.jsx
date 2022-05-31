import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

function Nav() {
  return (
    <nav className={css.nav}>
      <ul className={css.nav__wrap}>
        <li className={css.nav__text}>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? css.nav__link_selected : css.nav__link}`
            }
            to="/"
          >
            Create Hero
          </NavLink>
        </li>
        <li className={css.nav__text}>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? css.nav__link_selected : css.nav__link}`
            }
            to="/superhero"
          >
            Heros
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
