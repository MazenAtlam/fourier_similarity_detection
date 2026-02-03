import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Fifa from "../pages/Fifa";
import Songs from "../pages/Songs";
import Footer from "./components/layout/Footer";
import Navbar from  "./components/home/Navbar"
import "../styles/App.css";

const App = () => {
  return (
      <Router>
          <div className="app">
              <Navbar />

              <main className="main-content">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/ft-mixer" element={<Songs />} />
                      <Route path="/beamforming" element={<Fifa />} />
                  </Routes>
              </main>
              <Footer />
          </div>
      </Router>
  );
}

export default App;
