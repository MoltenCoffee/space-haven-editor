import { NavLink } from "react-router-dom";
import styles from "./button.module.css";

const Button = ({
  onClick,
  href,
  to,
  target = "_blank",
  children,
  ...other
}) => {
  const handleClick = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (onClick) {
      onClick(e);
    }
  };

  if (href) {
    return (
      <a
        href={href}
        className={styles.button}
        rel="noreferrer noopener"
        target={target}
        {...other}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <NavLink to={to} className={styles.button} {...other}>
        {children}
      </NavLink>
    );
  }

  return (
    <button onClick={handleClick} className={styles.button} {...other}>
      {children}
    </button>
  );
};

export default Button;
