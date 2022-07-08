// node_modules/scripts/react-shim.js
import React from "react";

// src/index.tsx
function Theme({ children }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, children));
}
function add(a, b) {
  return a + b;
}
export {
  Theme,
  add
};
