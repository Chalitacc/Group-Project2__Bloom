import styles from "./PlantList.module.css";

const PlantList = ({ listArray }) => {
  return (
    <div className={styles.rootContainer}>
      {listArray.map((item) => {
        return (
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
        );
      })}
    </div>
  );
};

export default PlantList;
