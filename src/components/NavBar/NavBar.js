import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href='#/' class='fa fa-tasks tasks_icon'></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href='#/'>Home</a>
        </li>
        <li>
          <a href='#/'>Favorite</a>
        </li>
        <li>
          <a href='#/'>About</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
