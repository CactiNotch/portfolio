import type { Component } from "solid-js";

import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header>
        <h1 class="title">
          <span class="first-name">James</span>
          <span class="last-name">
            Golob<span class="blinking-cursor">_</span>
          </span>
        </h1>
        <nav>
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
        <a
          href="https://github.com/CactiNotch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="github-logo"
            src="https://github.com/fluidicon.png"
            alt="GitHub Logo"
            width="32"
            height="32"
          />
        </a>
      </header>
      <main>
        <section>
          <h2>Main Content Section</h2>
          <p>This is the main content area of the page.</p>
        </section>
      </main>
  <div id="footer-placeholder"></div>
  <footer>
        <div class="container">
          <p>
            &copy; <span id="year"></span> James Golob — Built with HTML, CSS,
            and minimal JS.
          </p>
          <p>
            <a href="mailto:you@example.com">Contact</a>
            &nbsp;•&nbsp;
            <a href="resume.pdf">Resume</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
