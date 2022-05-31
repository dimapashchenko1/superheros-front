import css from './Header.module.css';
import { Nav } from "../indeх";

function Header() {
  return (
    <div className={css.header__container}>
    <div className={css.header__nav}><Nav/></div>
    </div>
  )
}

export default Header;