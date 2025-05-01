import { plantListArray } from "../../assets/localPlantList";
import PlantList from "../../components/PlantList/PlantList";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Plants</h1>
        <button className={styles.addPlantButton}>Add Plant</button>
      </header>
      <div className={styles.utilityContainers}>
        <div className={styles.utilityLeftContainer}>
          <div className={styles.searchContainer}>
            <label htmlFor="search">Search:</label>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search plants"
            />
          </div>
        </div>
        <div className={styles.utilityRightContainer}>
          <div className={styles.filterContainer}>
            <label htmlFor="filter">Filter:</label>
            <select name="filter" id="filter">
              <option value="plant">Plant</option>
              <option value="plant">Tree</option>
              <option value="plant">Cactus</option>
            </select>
          </div>
          <div className={styles.sortContainer}>
            <label htmlFor="sort">Sort:</label>
            <select name="sort" id="sort">
              <option value="alphabetically">Alphabetically</option>
            </select>
          </div>
        </div>
      </div>
      <PlantList listArray={plantListArray} />
    </div>
  );
};

export default Home;
