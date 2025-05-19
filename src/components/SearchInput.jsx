import React from "react";
import styles from "../styles/Search.module.css";

const SearchInput = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search for jobs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Search jobs"
      />
    </div>
  );
};

export default SearchInput;
