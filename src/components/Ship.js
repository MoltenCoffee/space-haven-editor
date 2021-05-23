import { useState, useContext, createRef } from "react";
import { FormattedMessage } from "react-intl";
import { Edit3 } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Heading from "./Heading";
import styles from "./ship.module.css";
import { SaveContext } from "../context/SaveContext";

const Ship = ({ name, crew }) => {
  const { editGameData } = useContext(SaveContext);
  const [edit, setEdit] = useState(false);
  const shipNameRef = createRef();

  return (
    <Card>
      <div className={styles.wrapper} id={name}>
        <div className={styles.titleBar}>
          {edit ? (
            <>
              <input defaultValue={name} ref={shipNameRef} />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setEdit(false);
                  editGameData({
                    type: "setShipName",
                    value: shipNameRef.current.value,
                    name: name,
                  });
                }}
              >
                <FormattedMessage id="change" defaultMessage="Change" />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setEdit(false);
                }}
              >
                <FormattedMessage id="reset" defaultMessage="Reset" />
              </button>
            </>
          ) : (
            <>
              <Heading level={3} noFont style={{ marginRight: ".5rem" }}>
                {name}
              </Heading>
              <Edit3
                onClick={() => {
                  setEdit(true);
                }}
                height="15"
                width="15"
              />
            </>
          )}
        </div>
        <div>
          <Heading level={4} noFont>
            <FormattedMessage id="crew" defaultMessage="Crew" />
          </Heading>
          {crew?.map((member) => (
            <Link to={`/edit/crew#${member._attributes.name}`}>
              <Card inline>
                <span className={styles.crewLink}>
                  {member._attributes.name}
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Ship;
