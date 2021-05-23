import styles from "./buttonbar.module.css";

const ButtonBar = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default ButtonBar;
