import styles from "./button.module.css";

const Button = ({ onClick, href, target = "_blank", children, ...other }) => {
  const handleClick = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (onClick) {
      onClick(e);
    }
  };

  return href ? (
    <a
      href={href}
      className={styles.button}
      rel="noreferrer noopener"
      target={target}
      {...other}
    >
      {children}
    </a>
  ) : (
    <button onClick={handleClick} className={styles.button} {...other}>
      {children}
    </button>
  );
};

export default Button;
