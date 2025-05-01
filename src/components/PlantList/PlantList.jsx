import PlantItem from "../PlantItem/PlantItem";
import styles from "./PlantList.module.css";

const PlantList = ({ listArray }) => {
  return (
    <div className={styles.rootContainer}>
      {listArray.map((item) => {
        return <PlantItem item={item} />;
      })}
    </div>
  );
};

export default PlantList;
