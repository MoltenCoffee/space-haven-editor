import { useState } from "react";
import elements from "../data/elements";

import styles from "./storagerow.module.css";

const StorageRow = ({ item, onChange }) => {
  const [edit, setEdit] = useState(false);

  const handleClick = () => {
    !edit && setEdit(true);
  };

  const handleBlur = (e) => {
    const count = e.currentTarget.value;
    setEdit(false);
    onChange && onChange(item._attributes?.elementaryId, count);
  };

  return (
    <tr>
      <td className={styles.nameField}>{elements[item._attributes?.elementaryId]?.name || "Unknown"}</td>
      <td onClick={handleClick}>
        {edit ? (
          <input
            type="number"
            defaultValue={item._attributes?.inStorage}
            autoFocus
            onBlur={handleBlur}
            className={styles.input}
          />
        ) : (
          item._attributes?.inStorage
        )}
      </td>
    </tr>
  );
};

export default StorageRow;
