import type { Component } from "solid-js";

import styles from "./header.module.css";
import { A } from "@solidjs/router";

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
            <A href="/">Home</A>
          </li>
          <li>
            <A href="/articles">Articles</A>
          </li>
          <li>
            <A href="/projects">Projects</A>
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
