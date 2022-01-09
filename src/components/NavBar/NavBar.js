import styles from './NavBar.module.scss';

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
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/favorite'>Favorite</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
