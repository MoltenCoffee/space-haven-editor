import { useContext } from "react";
import Card from "./Card";
import StorageRow from "./StorageRow";
import styles from "./storage.module.css";
import { SaveContext } from "../context/SaveContext";

const Storage = ({ shipId, tileDetails, inventory, rules, eatAllowed }) => {
  const { editGameData } = useContext(SaveContext);
  const handleChange = (element, count) => {
    editGameData({ type: "setStorageElement", ship: shipId, count, element, ...tileDetails });
  };

  return (
    <Card className={styles.wrapper}>
      <label>
        <input type="checkbox" defaultChecked={!!parseInt(eatAllowed)} />
        <span>Direct eat allowed</span>
      </label>
      <table className={styles.table}>
        {(!inventory || inventory.length === 0) && (
          <tr>
            <td>Emtpy</td>
            <td />
          </tr>
        )}
        {Array.isArray(inventory) &&
          inventory?.map((item) => (
            <StorageRow
              key={item._attributes?.elementaryId}
              onChange={handleChange}
              item={item}
            />
          ))}
      </table>
    </Card>
  );
};

export default Storage;
