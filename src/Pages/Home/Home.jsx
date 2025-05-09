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

const Home = () => {
  const plantList = useContext(PlantListContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortType, setSortType] = useState("alphabetically");
  const [filteredSortedList, setFilteredSortedList] = useState([]);

  const createFilteredAndSortList = (plantList) => {
    // Search
    const searchResultsList = plantList.filter((plant) =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
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
    createFilteredAndSortList(plantList);
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
        <h1 className={styles.title}>Plants</h1>
        <Link className={styles.addPlantButton} to={"/add-plant"}>
          Add Plant
        </Link>
      </header>
      <div className={styles.utilityContainers}>
        <div className={styles.utilityLeftContainer}>
          <div className={styles.searchContainer}>
            <img src="/icons/search.svg" alt="Search icon" />
            <input
              aria-label="Search for plants"
              type="search"
              name="search"
              id="search"
              placeholder="Search plants"
              inputMode="search"
              autoComplete="off"
              onChange={handleSearchTerm}
            />
          </div>
        </div>
        <div className={styles.utilityRightContainer}>
          <div className={styles.filterContainer}>
            <label htmlFor="filter">Filter:</label>
            <select name="filter" id="filter" onChange={handleFilterType}>
              <option value="all">All</option>
              <option value="herb">Herb</option>
              <option value="tree">Tree</option>
              <option value="shrub">Shrub</option>
              <option value="climber">Climber</option>
              <option value="creeper">Creeper</option>
            </select>
          </div>
          <div className={styles.sortContainer}>
            <label htmlFor="sort">Sort:</label>
            <select name="sort" id="sort" onChange={handleSortType}>
              <option value="alphabetically" className={styles.selectOption}>
                Alphabetically A-Z
              </option>
              <option value="descending" className={styles.selectOption}>
                Descending Z-A
              </option>
            </select>
          </div>
        </div>
      </div>
      {<PlantList filteredSortedList={filteredSortedList} />}
    </div>
  );
};

export default Home;
