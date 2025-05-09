import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.titleContainer}>
        <Link to={"/"}>
          <img src="/images/bloom-logo.png" alt="Bloom logo" />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
