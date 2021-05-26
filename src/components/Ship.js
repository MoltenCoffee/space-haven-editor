import { useState, useContext, useEffect, createRef } from "react";
import { useWorker } from "@koale/useworker";
import { FormattedMessage } from "react-intl";
import { Edit3 } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Heading from "./Heading";
import Storage from "./Storage";
import styles from "./ship.module.css";
import { SaveContext } from "../context/SaveContext";

import findStorage from "../lib/findStorage";
import ShipImage from "./ShipImage";

const Ship = ({ name, shipId, crew, tiles, dimensions }) => {
  const { editGameData } = useContext(SaveContext);
  const [editName, setEditName] = useState(false);
  const [inventories, setInventories] = useState(null);
  const [tileWorker] = useWorker(findStorage);
  const shipNameRef = createRef();

  useEffect(() => {
    if (tiles) {
      const runTileWorker = async () => {
        setInventories(await tileWorker(tiles));
      };

      runTileWorker();
    }
  }, [tiles]);

  return (
    <Card>
      <div className={styles.wrapper} id={name}>
        <div className={styles.infoBar}>
          <div className={styles.titleBar}>
            {editName ? (
              <>
                <input defaultValue={name} ref={shipNameRef} />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setEditName(false);
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
                    setEditName(false);
                  }}
                >
                  <FormattedMessage id="reset" defaultMessage="Reset" />
                </button>
              </>
            ) : (
              <>
                <Heading level={3} style={{ marginRight: ".5rem" }}>
                  {name}
                </Heading>
                <Edit3
                  onClick={() => {
                    setEditName(true);
                  }}
                  height="15"
                  width="15"
                />
              </>
            )}
          </div>
          <div>
            <Heading level={4}>
              <FormattedMessage id="crew" defaultMessage="Crew" />
            </Heading>
            {crew?.map((member) => (
              <Link
                to={`/edit/crew#${member._attributes.name}`}
                key={member._attributes.entId}
              >
                <Card inline>
                  <span className={styles.crewLink}>
                    {member._attributes.name}
                  </span>
                </Card>
              </Link>
            ))}
          </div>
          <ShipImage tiles={tiles} dimensions={dimensions} />
        </div>
        <div></div>
        <div>
          <Heading level={4}>Storage</Heading>
          <div className={styles.storageSpace}>
            {inventories ? (
              inventories?.map((tile) => (
                <Storage
                  key={`${shipId}${tile._attributes.x}${tile._attributes.y}`}
                  inventory={tile?.l?.[3]?.feat?.inv?.s}
                  eatAllowed={tile?.l?.[3]?.feat?._attributes?.eatAllowed}
                  shipId={shipId}
                  tileDetails={{ x: tile._attributes.x, y: tile._attributes.y }}
                />
              ))
            ) : (
              <Card>Loading..</Card>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Ship;
