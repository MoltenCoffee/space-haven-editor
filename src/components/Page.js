import clsx from "clsx";
import { useLocation } from "react-router-dom";
import styles from "./page.module.css";
import SideBar from "./SideBar";

const Page = ({ children }) => {
  const location = useLocation();
  const isEdit = location.pathname.startsWith("/edit");

  return isEdit ? (
    <main className={clsx(styles.wrapper, styles.internal)}>
      <SideBar />
      <div className={styles.mainSection}>{children}</div>
    </main>
  ) : (
    <main className={styles.wrapper}>{children}</main>
  );
};

export default Page;
