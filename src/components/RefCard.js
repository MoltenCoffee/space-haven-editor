import { useState } from "react";
import Heading from "./Heading";
import Card from "./Card";

import styles from "./refcard.module.css";

const Row = ({ keyId, value }) => (
  <tr>
    <td>{keyId}</td>
    <td>{value || "Unknown"}</td>
  </tr>
);

const sortFunctions = {
  id: (data) => Object.keys(data).sort((a, b) => a - b),
  idRev: (data) => Object.keys(data).sort((a, b) => b - a),
  name: (data) =>
    Object.keys(data).sort((a, b) =>
      (data[a].name || "Unknown").localeCompare(data[b].name || "Unknown"),
    ),
  nameRev: (data) =>
    Object.keys(data).sort((a, b) =>
      (data[b].name || "Unknown").localeCompare(data[a].name || "Unknown"),
    ),
};

const RefCard = ({ title, data }) => {
  const [sortBy, setSortBy] = useState("id");
  if (!data) {
    return null;
  }

  const Rows = () => {
    const sorted = sortFunctions[sortBy](data);
    return sorted.map((key) => {
      return <Row key={key} keyId={key} value={data[key]?.name} />;
    });
  };

  return (
    <Card>
      {title && <Heading level={3}>{title}</Heading>}
      <table className={styles.table}>
        <tr>
          <th
            onClick={() => {
              if (sortBy === "id") {
                setSortBy("idRev");
                return;
              }
              setSortBy("id");
            }}
          >
            ID
          </th>
          <th
            onClick={() => {
              if (sortBy === "name") {
                setSortBy("nameRev");
                return;
              }
              setSortBy("name");
            }}
          >
            Name
          </th>
        </tr>
        <Rows />
      </table>
    </Card>
  );
};

export default RefCard;
