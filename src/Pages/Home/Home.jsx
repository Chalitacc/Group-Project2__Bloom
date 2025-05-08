import styles from "./Home.module.css";

import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { database } from "../../firebaseConfig";
import { onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";

import PlantList from "../../components/PlantList/PlantList";
import Filter from "../../components/Filter/Filter";

const Home = () => {
  const [filterType, setFilterType] = useState("all");
  const handleFilterType = (e) => {
    setFilterType(e.target.value);
  };

  const [sortType, setSortType] = useState("alphabetically");
  const handleSortType = (e) => {
    setSortType(e.target.value);
  };
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Plants</h1>
        <NavLink className={styles.addPlantButton} to={"/add-plant"}>
          Add Plant
        </NavLink>
      </header>
      <div className={styles.utilityContainers}>
        <div className={styles.utilityLeftContainer}>
          <div className={styles.searchContainer}>
            <img src="/icons/search.svg" alt="" />
            <input
              aria-label="Search for plants"
              type="search"
              name="search"
              id="search"
              placeholder="Search plants"
              inputMode="search"
              autoComplete="off"
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
      <Filter filterType={filterType} sortType={sortType} />
      {/* {<PlantList />} */}
    </div>
  );
};

export default Home;
