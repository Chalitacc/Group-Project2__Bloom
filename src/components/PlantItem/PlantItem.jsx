import styles from "./PlantItem.module.css";

const PlantItem = ({ item }) => {
  return (
    <>
      {/* Front Side */}
      <div className={styles.cardContainer}>
        <img
          src={item.image}
          alt={`Image of ${item.name}`}
          className={styles.plantImage}
        />
        <div className={styles.cardInfoContainer}>
          <h3 className={styles.plantName}>{item.name}</h3>
        </div>
      </div>

      {/* Backside */}
      <div className={styles.cardBackContainer}>
        <h2>{item.name}</h2>
        <ul className={styles.list}>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Scientific Name:</p>
            <p className={styles.plantDescription}>{item.scientificName}</p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Watering Schedule:</p>
            <p className={styles.plantDescription}>{item.wateringSchedule}</p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Light Requirement:</p>
            <p className={styles.plantDescription}>{item.lightRequirement}</p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Soil Type:</p>
            <p className={styles.plantDescription}>{item.soilType}</p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Temperature Range:</p>
            <p className={styles.plantDescription}>{item.temperatureRange}</p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Humidity:</p>
            <p className={styles.plantDescription}>{item.humidity}</p>
          </li>
          <li className={styles.listElement}>
            <p className={styles.plantHeading}>Toxicity:</p>
            <p className={styles.plantDescription}>{item.toxicity}</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PlantItem;
