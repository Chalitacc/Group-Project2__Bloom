import { Link } from "react-router-dom";
import styles from "./PlantItem.module.css";

const PlantInFocus = ({ plantInFocus }) => {
  return (
    <>
      <div className={styles.plantContainer}>
        <h2 className={styles.plantHeader}>{plantInFocus.name}</h2>
        <img
          src={plantInFocus.image}
          alt={`Image of ${plantInFocus.name}`}
          className={styles.plantImage}
        />
        <ul className={styles.list}>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Scientific Name:</p>
            <p className={styles.plantDescription}>
              {plantInFocus.scientificName}
            </p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Watering Schedule:</p>
            <p className={styles.plantDescription}>
              {plantInFocus.wateringSchedule}
            </p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Light Requirement:</p>
            <p className={styles.plantDescription}>
              {plantInFocus.lightRequirement}
            </p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Soil Type:</p>
            <p className={styles.plantDescription}>{plantInFocus.soilType}</p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Temperature Range:</p>
            <p className={styles.plantDescription}>
              {plantInFocus.temperatureRange}
            </p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Humidity:</p>
            <p className={styles.plantDescription}>{plantInFocus.humidity}</p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Toxicity:</p>
            <p className={styles.plantDescription}>{plantInFocus.toxicity}</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PlantInFocus;
