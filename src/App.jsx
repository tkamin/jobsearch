import React from "react";
import SearchContainer from "./components/SearchContainer";
import styles from "./styles/Search.module.css";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <h1>Job Search</h1>
        <p>Find your next opportunity in AI safety and effective altruism</p>
      </header>
      <main>
        <SearchContainer />
      </main>
      <footer className={styles.footer}>
        <p>Built with React - Powered by ML</p>
      </footer>
    </div>
  );
};

export default App;
