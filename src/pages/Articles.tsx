import type { Component } from "solid-js";

import styles from "./Article.module.css";
import pagesStyles from "./Pages.module.css";

const Articles: Component = () => {
  return (
    <main class={pagesStyles.page}>
      <div class={pagesStyles.pageContent}>
        <header class={pagesStyles.header}>
          <h1 class={pagesStyles.title}>A Starter Article Template</h1>
          <p class={pagesStyles.meta}>
            Published <time datetime="2025-09-16">September 16, 2025</time>
          </p>
        </header>

        <p class={styles.lead}>
          This is a short lead paragraph that summarizes the article. Use it to
          hook the reader with a quick overview of the topic and the main
          takeaway.
        </p>

        <section class={styles.content}>
          <h2>Introduction</h2>
          <p>
            Start your article with an introduction that sets context, explains
            why the topic matters, and outlines what the reader will learn.
          </p>

          <h2>Body</h2>
          <p>
            Add the main content here. Break it into digestible sections with
            clear subheadings and short paragraphs. Use lists, code blocks, or
            images where appropriate to improve scannability.
          </p>

          <h3>Example list</h3>
          <ul>
            <li>Key point one</li>
            <li>Key point two</li>
            <li>Key point three</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Wrap up with a short conclusion or call-to-action. Link to related
            articles or resources for readers who want to dive deeper.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Articles;
