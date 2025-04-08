import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import MalePage from "./MalePage";
import FemalePage from "./FemalePage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/male" element={<MalePage />} />
        <Route path="/female" element={<FemalePage />} />
      </Routes>
    </Router>
  );
}




