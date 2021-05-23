import clsx from "clsx";
import styles from "./heading.module.css";

const Heading = ({ level = 1, noFont = false, children, ...other }) => {
  const HLevel = `h${level >= 1 || level <= 6 ? level : 1}`;

  return (
    <HLevel
      className={clsx(styles.heading, (noFont || level > 2) && styles.noFont)}
      {...other}
    >
      {children}
    </HLevel>
  );
};

export default Heading;
