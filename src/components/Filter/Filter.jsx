import { useContext } from "react";
import { PlantListContext } from "../../context/PlantListContext";
import PlantList from "../PlantList/PlantList";

const Filter = ({ filterType, sortType }) => {
  const plantList = useContext(PlantListContext);

  const filterList = () => {
    if (filterType !== "all") {
      const filteredList = plantList.filter((item) => item.type === filterType);
      return filteredList;
    } else {
      return plantList;
    }
  };

  const sortFilteredList = () => {
    const filteredList = filterList();
    // `(a, b) => a.name.localeCompare(b.name)` - Suggested by ChatGpt - Martinus
    if (sortType === "alphabetically") {
      return filteredList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "descending") {
      return filteredList.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      return filteredList;
    }
  };

  return <PlantList filteredSortedList={sortFilteredList()} />;
};

export default Filter;
