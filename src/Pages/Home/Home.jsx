// Style import
import styles from "./Home.module.css";

// React modules import
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";

// Context import
import { PlantListContext } from "../../context/PlantListContext";

// Componets import
import PlantList from "../../components/PlantList/PlantList";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";
import Sort from "../../components/Sort/Sort";

const Home = () => {
  const plantList = useContext(PlantListContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortType, setSortType] = useState("alphabetically");
  const [filteredSortedList, setFilteredSortedList] = useState([]);

  const createFilteredAndSortedList = (plantList) => {
    // Search
    const searchResultsList = plantList.filter((plant) =>
      plant.name.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
    );

    // Filter
    let filteredList = [];
    if (filterType !== "all") {
      filteredList = searchResultsList.filter(
        (plant) => plant.type === filterType
      );
    } else {
      filteredList = searchResultsList;
    }

    // Sort
    let sortedList = [];
    if (sortType === "alphabetically") {
      sortedList = filteredList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "descending") {
      sortedList = filteredList.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      sortedList = filteredList;
    }

    setFilteredSortedList(sortedList);
  };

  useEffect(() => {
    createFilteredAndSortedList(plantList);
  }, [plantList, searchTerm, filterType, sortType]);

  // Handle Search
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle filter
  const handleFilterType = (e) => {
    setFilterType(e.target.value);
  };

  // Handle sort type
  const handleSortType = (e) => {
    setSortType(e.target.value);
  };

  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <Header />
      </header>
      <div className={styles.utilityContainers}>
        <div className={styles.utilityLeftContainer}>
          <Search handleSearchTerm={handleSearchTerm} />
        </div>
        <div className={styles.utilityRightContainer}>
          <Filter handleFilterType={handleFilterType} />
          <Sort handleSortType={handleSortType} />
        </div>
      </div>
      {<PlantList filteredSortedList={filteredSortedList} />}
    </div>
  );
};

export default Home;
