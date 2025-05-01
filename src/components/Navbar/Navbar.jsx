import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.titleContainer}>
        <NavLink to={"/"}>
          <img src="images/bloom-logo.png" alt="Bloom logo" />
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
