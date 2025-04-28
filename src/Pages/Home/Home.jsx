import { plantListArray } from "../../assets/localPlantList";
import PlantList from "../../components/PlantList/PlantList";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <PlantList listArray={plantListArray} />
    </div>
  );
};

export default Home;
