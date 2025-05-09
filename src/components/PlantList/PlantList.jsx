import styles from "./PlantList.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PlantListContext } from "../../context/PlantListContext";

const PlantList = ({ filteredSortedList }) => {
  const plantList = filteredSortedList;

  return (
    <div className={styles.rootContainer}>
      {plantList.map((item) => {
        return (
          <Link
            to={`plants/${item.name?.toLowerCase()}`}
            className={styles.cardContainer}
            key={item.id}
          >
            <img
              src={item.image}
              alt={`Image of ${item.name}`}
              className={styles.plantImage}
            />
            <div className={styles.cardInfoContainer}>
              <h3 className={styles.plantName}>{item.name}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PlantList;
