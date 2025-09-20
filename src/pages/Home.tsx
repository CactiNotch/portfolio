import type { Component } from "solid-js";

import pagesStyles from "./Pages.module.css";

const Home: Component = () => {
  return (
    <div class={pagesStyles.page}>
      <div class={pagesStyles.pageContent}>
        <header class={pagesStyles.header}>
          <h1 class={pagesStyles.title}>Home</h1>
        </header>
        <p>What's new!</p>
      </div>
    </div>
  );
};

export default Home;
