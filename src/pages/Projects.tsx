import type { Component } from "solid-js";

import styles from "./Projects.module.css";
import pagesStyles from "./Pages.module.css";

const Projects: Component = () => {
  return (
    <div class={pagesStyles.page}>
      <div class={pagesStyles.pageContent}>
        <header class={pagesStyles.header}>
          <h1 class={pagesStyles.title}>Projects</h1>
        </header>
        <p>
          Projects and showcases will appear here. Adding content for the sake
          of it spreading across the page.
        </p>
      </div>
    </div>
  );
};

export default Projects;
