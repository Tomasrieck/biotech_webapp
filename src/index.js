import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Code from "./pages/Code.js";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router basename="/biotech_webapp">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="code" element={<Code />} />
    </Routes>
  </Router>
);
