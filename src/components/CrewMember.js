import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import CrewStatBar from "./CrewStatBar";
import Heading from "./Heading";
import styles from "./crewmember.module.css";
import { useIntl } from "react-intl";

import { default as conditionDetails } from "../data/conditions";
import { SaveContext } from "../context/SaveContext";

const CrewMember = ({ name, ship, inSuit = false, gender, conditions }) => {
  const { editGameData } = useContext(SaveContext);
  const { formatMessage } = useIntl();
  return (
    <div className={styles.wrapper} id={name}>
      <div className={styles.charDetails}>
        <Heading level={3}>{name}</Heading>
        <span>
          {gender === "f"
            ? formatMessage({ id: "gender_female", defaultMessage: "Female" })
            : formatMessage({ id: "gender_male", defaultMessage: "Male" })}
        </span>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={inSuit}
            onChange={() => {
              editGameData({
                type: "setSuited",
                ship,
                name,
                value: inSuit ? false : true,
              });
            }}
          />
          <span>
            <FormattedMessage id="in_suit" defaultMessage="in spacesuit" />
          </span>
        </label>
      </div>
      <div>
        <CrewStatBar type="health" />
        <CrewStatBar type="energy" />
        <CrewStatBar type="hunger" />
      </div>
      <div>
        <Heading level={4}>Conditions</Heading>
        <ul>
          {conditions.map((condition) => {
            if (parseInt(condition._attributes.id, 10) === 0) {
              return null;
            }
            return (
              <li>
                {conditionDetails[condition._attributes.id]?.name ||
                  `Unknown: ${condition._attributes.id}`}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CrewMember;
