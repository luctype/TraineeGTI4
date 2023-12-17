import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./Components/Navbar";
import Main from "./Pages/Main";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import "./Styles/Modules.css";
import reportWebVitals from "./reportWebVitals";
import About from "./Pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Quiz from "./Pages/Quiz";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar name="GTI" />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/sobre" element={<About />}></Route>
        <Route path="/contato" element={<Contact />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
