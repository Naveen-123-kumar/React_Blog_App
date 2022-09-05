import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import NewsProvider from "./contextAPI/NewsProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NewsProvider>
      <App />
    </NewsProvider>
  </React.StrictMode>
);
