import PlantList from "../../components/PlantList/PlantList";
import styles from "./Home.module.css";
import PlantItem from "../../components/PlantItem/PlantItem";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { database } from "../../firebaseConfig";
import { onSnapshot } from "firebase/firestore";

import { collection } from "firebase/firestore";
import { plantListArray } from "../../assets/localPlantList";
import Filter from "../../components/Filter/Filter";

const Home = () => {
  const { productId } = useParams();

  // const plantInFocus = plantListArray.find(
  //   (plant) => plant.name.toLowerCase() === productId
  // );

  // retrieve info from firebase

  const [plantItem, setPlantItem] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(database, "plants"),
      (snapshot) => {
        const plantsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPlantItem(plantsData);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const plantInFocus = plantItem.find(
    (plant) => plant.name && plant.name.toLowerCase() === productId
  );

  const [filterType, setFilterType] = useState("all");
  const handleFilterType = (e) => {
    setFilterType(e.target.value);
  };

  const [sortType, setSortType] = useState("alphabetically");
  const handleSortType = (e) => {
    setSortType(e.target.value);
  };

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
            <select name="filter" id="filter" onChange={handleFilterType}>
              <option value="all">All</option>
              <option value="plant">Plant</option>
              <option value="tree">Tree</option>
              <option value="cactus">Cactus</option>
            </select>
          </div>
          <div className={styles.sortContainer}>
            <label htmlFor="sort">Sort:</label>
            <select name="sort" id="sort" onChange={handleSortType}>
              <option value="alphabetically">Alphabetically A-Z</option>
              <option value="descending">Descending Z-A</option>
            </select>
          </div>
        </div>
      </div>
      <Filter
        listArray={plantItem}
        filterType={filterType}
        sortType={sortType}
      />
      {/* {filterType === "all" && <PlantList listArray={plantItem} />}

      {filterType !== "all" && (
        <Filter listArray={plantItem} filterType={filterType} />
      )} */}

      {productId && (
        <PlantItem listArray={plantItem} plantInFocus={plantInFocus} />
      )}

      {/* Local database */}
      {/* {!productId && <PlantList listArray={plantListArray} />}
      {productId && (
        <PlantItem listArray={plantListArray} plantInFocus={plantInFocus} />
      )} */}
    </div>
  );
};

export default Home;
