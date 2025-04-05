import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // Import Navbar
import MalePage from './MalePage'; // Import MalePage
import FemalePage from './FemalePage'; // Import FemalePage

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/male" element={<MalePage />} />
        <Route path="/female" element={<FemalePage />} />
        {/* Add any additional routes here */}
      </Routes>
    </Router>
  );
}

export default App;





