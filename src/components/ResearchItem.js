import { useContext } from "react";
import clsx from "clsx";
import { SaveContext } from "../context/SaveContext";
import research from "../data/research";
import ResearchFlask from "./ResearchFlask";

import styles from "./researchitem.module.css";

const ResearchItem = ({ tree, item, current }) => {
  const { editGameData } = useContext(SaveContext);
  const techId = item?._attributes?.techId;
  const details = research[tree]?.[techId];
  if (!techId || !details || details.hidden) {
    return null;
  }

  const requiredAmmount =
    parseInt(details.req.level1, 10) +
    parseInt(details.req.level2, 10) +
    parseInt(details.req.level3, 10);
  const currentAmmount =
    parseInt(item.blocksDone?._attributes?.level1, 10) +
    parseInt(item.blocksDone?._attributes?.level2, 10) +
    parseInt(item.blocksDone?._attributes?.level3, 10);

  const percentage = currentAmmount
    ? Math.floor((currentAmmount / requiredAmmount) * 100)
    : 0;

  const handleChange = (e) => {
    e.preventDefault();
    const target = e.currentTarget;

    editGameData({
      type: `${target.dataset.action}Research`,
      id: target.parentNode.dataset.techid,
      level: `level${target.parentNode.dataset.level}`,
    });
  };

  return (
    <div
      className={clsx(
        styles.wrapper,
        techId === current ? styles.active : null,
      )}
    >
      <span>{details.name || "Unknown"}</span>
      {percentage < 100 && (
        <div className={styles.levelBar}>
          <ResearchFlask
            level={1}
            techId={techId}
            onChange={handleChange}
            ammount={item.blocksDone?._attributes?.level1}
          />
          <ResearchFlask
            level={2}
            techId={techId}
            onChange={handleChange}
            ammount={item.blocksDone?._attributes?.level2}
          />
          <ResearchFlask
            level={3}
            techId={techId}
            onChange={handleChange}
            ammount={item.blocksDone?._attributes?.level3}
          />
        </div>
      )}
      <div className={styles.progress}>
        <div
          className={styles.progressBar}
          style={{ width: `${percentage}%` }}
        />
        <span className={styles.progressMark}>{percentage}%</span>
      </div>
    </div>
  );
};

export default ResearchItem;
