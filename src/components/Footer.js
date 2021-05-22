import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      Created by{" "}
      <a
        href="https://github.com/MoltenCoffee"
        rel="noreferrer noopener"
        target="_blank"
      >
        @MoltenCoffee
      </a>
    </footer>
  );
};

export default Footer;
