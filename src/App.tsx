import type { Component, JSX } from "solid-js";
import Header from "./components/header";
import Footer from "./components/footer";

import styles from "./App.module.css";

const App: Component<{ children?: JSX.Element }> = (props) => {
  return (
    <div class={`${styles.App} ${styles.pageWithStickyFooter}`}>
      <Header />
      <main class={styles.pageContent}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default App;
