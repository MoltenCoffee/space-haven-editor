import styles from "./button.module.css";

const Button = ({ onClick, href, children }) => {
  const handleClick = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (onClick) {
      onClick(e);
    }
  };

  return href ? (
    <a href={href} className={styles.button}>{children}</a>
  ) : (
    <button onClick={handleClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
