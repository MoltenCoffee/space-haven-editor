import styles from "./github.module.css";

const GitHub = () => {
  return (
    <div className={styles.wrapper}>
      <a
        href="https://github.com/MoltenCoffee/space-haven-editor"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img className={styles.logo} src="github64.png" alt="Source Code on GitHub" />
      </a>
    </div>
  );
};

export default GitHub;
