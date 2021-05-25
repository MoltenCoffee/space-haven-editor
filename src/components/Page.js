import clsx from "clsx";
import { useLocation } from "react-router-dom";
import styles from "./page.module.css";
import SideBar from "./SideBar";

const Page = ({ children, center }) => {
  const location = useLocation();
  const isEdit = location.pathname.startsWith("/edit");

  return isEdit ? (
    <main className={clsx(styles.wrapper, styles.internal)}>
      <SideBar />
      <div className={clsx(styles.mainSection, center && styles.center)}>
        {children}
      </div>
    </main>
  ) : (
    <main className={clsx(styles.wrapper, styles.withScroll, center && styles.center)}>
      {children}
    </main>
  );
};

export default Page;
