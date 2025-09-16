import type { Component } from "solid-js";
import Header from "./components/header";
import Footer from "./components/footer";

import styles from "./App.module.css";
import Article from "./components/article";

const App: Component = () => {
  return (
    <div class={`${styles.App} ${styles.pageWithStickyFooter}`}>
      <Header />
      <main class={styles.pageContent}>
        <Article />
      </main>

      <Footer />
    </div>
  );
};

export default App;
