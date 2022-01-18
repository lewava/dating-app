import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.navContainer}>
      <Link to="/" className={styles.NavTitle}>
        Home
      </Link>
      <Link to="/profile" className={styles.NavItem}>
        profile
      </Link>
      <Link to="/dashboard" className={styles.NavItem}>
        dashboard
      </Link>
    </nav>
  );
};

export default Nav;
