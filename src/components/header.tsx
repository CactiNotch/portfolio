import type { Component } from "solid-js";

import styles from "./header.module.css";

const Header: Component = () => {
  return (
    <header class={styles.header}>
      <h1 class={styles.title}>
        <span class={styles.firstName}>James</span>
        <span class={styles.lastName}>
          Golob<span class={styles.blinkingCursor}>_</span>
        </span>
      </h1>
      <nav class={styles.nav}>
        <ul>
          <li>
            <a href="main.html">Home</a>
          </li>
          <li>
            <a href="articles.html">Articles</a>
          </li>
          <li>
            <a href="projects.html">Projects</a>
          </li>
        </ul>
      </nav>
      <div class={styles.links}>
        <a
          href="https://github.com/CactiNotch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class={styles.githubLogo}
            src="https://github.com/fluidicon.png"
            alt="GitHub Logo"
            width="32"
            height="32"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
