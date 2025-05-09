import styles from "./Sort.module.css";

const Sort = ({ handleSortType }) => {
  return (
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
  );
};

export default Sort;
