import { FormattedMessage } from "react-intl";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <FormattedMessage id="created_by" defaultMessage="Created by" />
      &nbsp;
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
