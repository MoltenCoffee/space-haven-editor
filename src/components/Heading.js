import styles from "./heading.module.css";

const Heading = ({ level = 1, children }) => {
  const HLevel = `h${level >= 1 || level <= 6 ? level : 1}`;

  return <HLevel className={styles.heading}>{children}</HLevel>;
};

export default Heading;
