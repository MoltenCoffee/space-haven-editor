import clsx from "clsx";

import styles from "./card.module.css";

const Card = ({ children, className, inline, mode = "lighten", ...other }) => {
  return (
    <div
      className={clsx(
        styles.wrapper,
        styles[mode],
        inline ? styles.inline : null,
        className,
      )}
      {...other}
    >
      {children}
    </div>
  );
};

export default Card;
