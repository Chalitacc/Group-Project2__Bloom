import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <h1 className={styles.title}>Plants</h1>
      <Link className={styles.addPlantButton} to={"/add-plant"}>
        Add Plant
      </Link>
    </>
  );
};

export default Header;
