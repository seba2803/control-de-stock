import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import menu from '../../assets/menu.svg';

export default function Header() {
  return (
    <div className={style.navbar}>
      <input type='checkbox' id='check' className={style.input} />
      <label htmlFor='check' className={style.button}>
        <img src={menu} alt='menu' loading='lazy' className={style.svg} />
      </label>
      <nav className={style.nav}>
        <h1>Logo de tienda</h1>
        <NavLink className={style.link}>cargar stock</NavLink>
        <NavLink className={style.link}>cerrar sesión</NavLink>
      </nav>
    </div>
  );
}
