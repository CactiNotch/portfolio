import type { Component } from "solid-js";

import styles from "./footer.module.css";
import appStyles from "../App.module.css";

const Footer: Component = () => {
  return (
    <div class={appStyles.footerWrapper}>
      <footer class={styles.footer}>
        <div class="container">
          <p>James Golob - Built with HTML, CSS, and SolidJS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
