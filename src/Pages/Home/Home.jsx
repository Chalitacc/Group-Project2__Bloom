import PlantList from "../../components/PlantList/PlantList";
import styles from "./Home.module.css";
import PlantItem from "../../components/PlantItem/PlantItem";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { database } from "../../firebaseConfig";
import { onSnapshot } from "firebase/firestore";

import { collection } from "firebase/firestore";
import { plantListArray } from "../../assets/localPlantList";

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
      {!productId && <PlantList listArray={plantItem} />}
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
