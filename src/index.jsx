// index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./components/Navbar.jsx";
import "./index.css";
import Main from './components/Main.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavBar />
    <Main />
  </StrictMode>
);

