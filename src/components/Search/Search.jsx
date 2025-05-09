import styles from "./Search.module.css";

const Search = ({ handleSearchTerm }) => {
  return (
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
  );
};

export default Search;
