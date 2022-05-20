import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./layout/App";
import Login from "./layout/Login";
import Register from "./layout/Register";
import createGlobalStyle from "./assets/styles/global";
import Extract from "./layout/Extract";

// React ou Webpack
// componentes/Register
// componentes/Login
// js | jsx | ts | tsx
const GlobalStyle = createGlobalStyle;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/extract" element={<Extract />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
);
