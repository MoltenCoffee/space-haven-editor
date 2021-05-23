import { FormattedMessage } from "react-intl";
import Heading from "./Heading";
import styles from "./header.module.css";
import GitHub from "./GitHub";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Heading>
        <FormattedMessage id="title" defaultMessage="Space Haven Save Editor" />
      </Heading>
      <GitHub />
    </header>
  );
};

export default Header;
