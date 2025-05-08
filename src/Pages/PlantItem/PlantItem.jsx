import { useParams } from "react-router-dom";
import styles from "./PlantItem.module.css";
import { useContext, useEffect } from "react";
import { PlantListContext } from "../../context/PlantListContext";

const PlantItem = () => {
  const { productId } = useParams();
  const plantList = useContext(PlantListContext);

  const plant = plantList.find(
    (plant) => plant.name.toLowerCase() === productId.toLowerCase()
  );

  if (!plant) {
    return <p>Loading plant details...</p>;
  }

  return (
    <>
      <div className={styles.plantContainer}>
        <h1 className={styles.plantHeader}>{plant.name}</h1>
        <div className={styles.imageContainer}>
          <img
            src={plant.image}
            alt={`Image of ${plant.name}`}
            className={styles.plantImage}
          />
        </div>
        <ul className={styles.list}>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Plant Type:</p>
            <p className={styles.plantDescription}>{plant.type}</p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Scientific Name:</p>
            <p className={styles.plantDescription}>{plant.scientificName}</p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Watering Schedule:</p>
            <p className={styles.plantDescription}>{plant.wateringSchedule}</p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Light Requirement:</p>
            <p className={styles.plantDescription}>{plant.lightRequirement}</p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Soil Type:</p>
            <p className={styles.plantDescription}>{plant.soilType}</p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Temperature Range:</p>
            <p className={styles.plantDescription}>{plant.temperatureRange}</p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Humidity:</p>
            <p className={styles.plantDescription}>{plant.humidity}</p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Toxicity:</p>
            <p className={styles.plantDescription}>{plant.toxicity}</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PlantItem;
