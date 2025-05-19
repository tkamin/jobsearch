"use client";
import React, { useState } from "react";
import SearchInput from "./SearchInput";
import JobResults from "./JobResults";
import styles from "../styles/Search.module.css";

const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  async function searchJobs() {
    setIsLoading(true);
    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setResults([
        {
          title: "AI Safety Researcher",
          org: "DeepMind",
          location: "London",
        },
        {
          title: "Policy Analyst",
          org: "Open Phil",
          location: "SF Bay Area",
        },
        {
          title: "Research Engineer",
          org: "Anthropic",
          location: "Remote",
        },
      ]);
    } catch (error) {
      console.error("Error searching jobs:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      searchJobs();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <button
          className={styles.searchButton}
          onClick={handleSearch}
          disabled={isLoading}
        >
          Search
        </button>
      </div>
      <JobResults results={results} isLoading={isLoading} />
    </div>
  );
};

export default SearchContainer;
