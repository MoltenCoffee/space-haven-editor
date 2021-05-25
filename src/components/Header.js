import { FormattedMessage } from "react-intl";
import Heading from "./Heading";
import styles from "./header.module.css";
import GitHub from "./GitHub";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Heading>
        <NavLink to="/">
          <FormattedMessage
            id="title"
            defaultMessage="Space Haven Save Editor"
          />
        </NavLink>
      </Heading>
      <GitHub />
    </header>
  );
};

export default Header;
