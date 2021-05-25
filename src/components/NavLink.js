import { NavLink as Link } from "react-router-dom";

import styles from "./navlink.module.css";

const NavLink = ({ children, to, onClick, icon }) => {
  if (onClick) {
    return (
      <li className={styles.box}>
        <div role="button" className={styles.inner} onClick={onClick}>
          {icon}
          <span>{children}</span>
        </div>
      </li>
    );
  }

  return (
    <li className={styles.box}>
      <Link to={to} activeClassName={styles.active}>
        <div className={styles.inner}>
          {icon}
          <span>{children}</span>
        </div>
      </Link>
    </li>
  );
};

export default NavLink;
