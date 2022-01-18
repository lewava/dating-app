import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.navContainer}>
      <Link to="/" className={styles.NavTitle}>
        Startsida
      </Link>

      <Link to="/user" className={styles.NavItem}>
        Konto
      </Link>
      <Link to="/profile" className={styles.NavItem}>
        Profil
      </Link>
      <Link to="/dashboard" className={styles.NavItem}>
        Matcha
      </Link>
    </nav>
  );
};

export default Nav;
