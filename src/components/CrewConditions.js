import { useContext } from "react";
import { Slash } from "lucide-react";
import { default as conditionDetails } from "../data/conditions";
import styles from "./crewconditions.module.css";
import { SaveContext } from "../context/SaveContext";

const CrewConditions = ({ conditions, name, ship }) => {
  const { editGameData } = useContext(SaveContext);
  return (
    <ul className={styles.wrapper}>
      {conditions.map((condition) => {
        if (parseInt(condition._attributes.id, 10) === 0) {
          return null;
        }
        return (
          <li key={condition._attributes.id} className={styles.row}>
            <span>
              -&nbsp;
              {conditionDetails[condition._attributes.id]?.name ||
                `Unknown: ${condition._attributes.id}`}
            </span>
            <Slash
              role="button"
              width={15}
              height={15}
              className={styles.removeButton}
              onClick={() => {
                editGameData({
                  type: "removeCondition",
                  condition: condition._attributes.id,
                  name,
                  ship,
                });
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CrewConditions;
