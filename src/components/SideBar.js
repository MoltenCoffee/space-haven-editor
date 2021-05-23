import { FlaskConical, Users, Circle, Plane, Trash2 } from "lucide-react";
import NavLink from "./NavLink";

import styles from "./sidebar.module.css";

const SideBar = () => {
  return (
    <div className={styles.wrapper}>
      <nav>
        <ul className={styles.list}>
          <NavLink to="/edit" icon={<Circle />}>
            Home
          </NavLink>
          <NavLink to="/edit/research" icon={<FlaskConical />}>
            Research
          </NavLink>
          <NavLink to="/edit/crew" icon={<Users />}>
            Crew
          </NavLink>
          <NavLink to="/edit/ships" icon={<Plane />}>
            Ships
          </NavLink>
          <NavLink to="/" icon={<Trash2 />}>
            Discard
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
