import styles from "./Home.module.css";

import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { database } from "../../firebaseConfig";
import { onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";

import PlantList from "../../components/PlantList/PlantList";

const Home = () => {
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
            <select name="filter" id="filter">
              <option value="plant">Plant</option>
              <option value="plant">Tree</option>
              <option value="plant">Cactus</option>
            </select>
          </div>
          <div className={styles.sortContainer}>
            <label htmlFor="sort">Sort:</label>
            <select name="sort" id="sort">
              <option value="plant-name" className={styles.selectOption}>
                Plant Name
              </option>
              <option value="alphabetically" className={styles.selectOption}>
                Scientific Name
              </option>
            </select>
          </div>
        </div>
      </div>
      {<PlantList />}
    </div>
  );
};

export default Home;
