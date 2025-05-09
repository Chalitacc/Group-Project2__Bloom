import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.rootContainer}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
