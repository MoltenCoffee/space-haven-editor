import { FormattedMessage } from "react-intl";
import CrewStatBar from "./CrewStatBar";

import styles from "./crewmember.module.css";
import { useIntl } from "react-intl";

const CrewMember = ({ name, inSuit = false, gender }) => {
  const { formatMessage } = useIntl();
  return (
    <div className={styles.wrapper} id={name}>
      <div className={styles.charDetails}>
        <span>{name}</span>
        <span>
          {gender === "f"
            ? formatMessage({ id: "gender_female", defaultMessage: "Female" })
            : formatMessage({ id: "gender_male", defaultMessage: "Male" })}
        </span>
      </div>
      <div>
        <CrewStatBar type="Health" />
        <CrewStatBar type="Energy" />
        <CrewStatBar type="Hunger" />
      </div>
      <div>
        <label>
          <input type="checkbox" checked={inSuit} readOnly />
          <span>
            <FormattedMessage id="in_suit" defaultMessage="in spacesuit" />
          </span>
        </label>
      </div>
    </div>
  );
};

export default CrewMember;
