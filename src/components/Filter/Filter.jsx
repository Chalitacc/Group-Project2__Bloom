import styles from "./Filter.module.css";

const Filter = ({ handleFilterType }) => {
  return (
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
  );
};

export default Filter;
