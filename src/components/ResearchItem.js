import styles from "./researchitem.module.css";
import research from "../data/research";

const ResearchItem = ({tree, item}) => {
  const techId = item?._attributes?.techId;

  if (!techId) {
    return null;
  }

  return <div className={styles.wrapper}>
    <span>{research[tree]?.[techId]?.name}</span>
    <div className={styles.progress}>
      <div>percentage</div>
    </div>
  </div>
}

export default ResearchItem;
