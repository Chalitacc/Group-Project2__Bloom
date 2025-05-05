import { Link } from "react-router-dom";

import styles from "./PlantList.module.css";

const PlantList = ({ listArray }) => {
  return (
    <div className={styles.rootContainer}>
      {listArray
        .filter((item) => item.name)
        .map((item) => {
          return (
            <Link
              to={item.name ? item.name.toLowerCase() : ``}
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
