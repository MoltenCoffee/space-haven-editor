import { useContext } from "react";
import { FlaskConical, Users, Circle, Plane, Trash2 } from "lucide-react";
import { FormattedMessage } from "react-intl";
import NavLink from "./NavLink";
import { SaveContext } from "../context/SaveContext";
import styles from "./sidebar.module.css";

const SideBar = () => {
  const { reset } = useContext(SaveContext);

  return (
    <div className={styles.wrapper}>
      <nav>
        <ul className={styles.list}>
          <NavLink to="/edit" icon={<Circle />}>
            <FormattedMessage id="home" defaultMessage="Home" />
          </NavLink>
          <NavLink to="/edit/research" icon={<FlaskConical />}>
            <FormattedMessage id="research" defaultMessage="Research" />
          </NavLink>
          <NavLink to="/edit/crew" icon={<Users />}>
            <FormattedMessage id="crew" defaultMessage="Crew" />
          </NavLink>
          <NavLink to="/edit/ships" icon={<Plane />}>
            <FormattedMessage id="ships" defaultMessage="Ships" />
          </NavLink>
          <NavLink onClick={reset} icon={<Trash2 />}>
            <FormattedMessage id="discard" defaultMessage="Discard" />
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
