import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import clsx from "clsx";

import CrewStatBar from "./CrewStatBar";
import Heading from "./Heading";
import CrewConditions from "./CrewConditions";
import styles from "./crewmember.module.css";
import { useIntl } from "react-intl";

import { SaveContext } from "../context/SaveContext";

const CrewMember = ({ name, shipId, inSuit = false, gender, conditions }) => {
  const { editGameData } = useContext(SaveContext);
  const { formatMessage } = useIntl();
  return (
    <div className={styles.wrapper} id={name}>
      <div className={clsx(styles.charDetails, styles.section)}>
        <Heading level={3}>{name}</Heading>
        {gender === "f" ? (
          <span
            title={formatMessage({
              id: "gender_female",
              defaultMessage: "Female",
            })}
          >
            ♀
          </span>
        ) : (
          <span
            title={formatMessage({
              id: "gender_male",
              defaultMessage: "Male",
            })}
          >
            ♂
          </span>
        )}
      </div>
      <div className={styles.section}>
        <label>
          <input
            type="checkbox"
            checked={inSuit}
            onChange={() => {
              const changes = {
                type: "setSuited",
                ship: shipId,
                name,
                value: inSuit ? false : true,
              };
              console.log(changes);
              editGameData(changes);
            }}
          />
          <span>
            <FormattedMessage id="in_suit" defaultMessage="in spacesuit" />
          </span>
        </label>
      </div>
      <div className={styles.section}>
        <CrewStatBar type="health" />
        <CrewStatBar type="energy" />
        <CrewStatBar type="hunger" />
      </div>
      <div className={styles.section}>
        <Heading level={4}>Conditions</Heading>
        <CrewConditions conditions={conditions} name={name} ship={shipId} />
      </div>
    </div>
  );
};

export default CrewMember;
