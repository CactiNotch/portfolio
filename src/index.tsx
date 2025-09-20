/* @refresh reload */
import { render } from "solid-js/web";
import "solid-devtools";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/articles" component={Articles} />
      <Route path="/projects" component={Projects} />
    </Router>
  ),
  root!
);
