import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav className={style.navbar}>
        <NavLink className={style.link}>cargar stock</NavLink>
        <NavLink className={style.link}>cerrar sesión</NavLink>
      </nav>
    </>
  );
}
