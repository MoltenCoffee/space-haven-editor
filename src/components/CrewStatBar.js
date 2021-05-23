import { useIntl } from "react-intl";
import styles from "./crewstatbar.module.css";

const CrewStatBar = ({ type }) => {
  const { formatMessage } = useIntl();

  const strings = {
    health: formatMessage({ id: "health", defaultMessage: "Health" }),
    energy: formatMessage({ id: "energy", defaultMessage: "Energy" }),
    hunger: formatMessage({ id: "hunger", defaultMessage: "Hunger" }),
  };

  if (!strings[type]) {
    return null;
  }

  const percentage = 0;

  return (
    <div>
      <span>{strings[type]}</span>
      <div className={styles.barWrapper}>
        <div style={{ width: `${percentage}%` }}></div>
        <span>{percentage}%</span>
      </div>
    </div>
  );
};

export default CrewStatBar;
