import Heading from "./Heading";

import styles from "./header.module.css";
import GitHub from "./GitHub";

const Header = () => {
  const thing = "";

  return (
    <header className={styles.wrapper}>
      <Heading>Space Haven Save Editor</Heading>
      <GitHub />
    </header>
  );
};

export default Header;
