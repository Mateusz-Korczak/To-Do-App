import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href='/' className='fa fa-tasks tasks_icon'></a>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => isActive && styles.linkActive}
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive && styles.linkActive}
            to='/favorite'
          >
            Favorite
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive && styles.linkActive}
            to='/about'
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
