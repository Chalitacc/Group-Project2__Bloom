import PlantList from "../PlantList/PlantList";

const Filter = ({ listArray, filterType, sortType }) => {
  const filterList = () => {
    if (filterType !== "all") {
      const filteredList = listArray.filter((item) => item.type === filterType);
      return filteredList;
    } else {
      return listArray;
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

  return <PlantList listArray={sortFilteredList()} />;
};

export default Filter;
