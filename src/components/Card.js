import clsx from "clsx";

import styles from "./card.module.css";

const Card = ({ children, inline, mode = "lighten", ...other }) => {
  return (
    <div
      className={clsx(
        styles.wrapper,
        styles[mode],
        inline ? styles.inline : null,
      )}
      {...other}
    >
      {children}
    </div>
  );
};

export default Card;
