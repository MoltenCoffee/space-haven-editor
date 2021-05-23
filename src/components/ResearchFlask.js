import { FlaskConical } from "lucide-react";

import styles from "./researchflask.module.css";

const ResearchFlask = ({ techId, onChange, ammount = 0, level = 1 }) => {
  const levelStyle = styles[`level${level}`];

  return (
    <div className={styles.wrapper} data-techid={techId} data-level={level}>
      <span role="button" onClick={onChange} data-action="minus">
        -
      </span>
      <div>
        <FlaskConical className={levelStyle} />
        <span className={styles.iconWrapper}>{ammount}</span>
      </div>
      <span role="button" onClick={onChange} data-action="plus">
        +
      </span>
    </div>
  );
};

export default ResearchFlask;
