import PlantList from "../PlantList/PlantList";

const Search = ({ plants = [], searchTerm }) => {
  // Filter plants based on the search term
  const sortFilteredList = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return <PlantList filteredSortedList={sortFilteredList} />;
};

export default Search;
