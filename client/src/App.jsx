import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dash from './pages/Dashboard';
import ProtectedRoute from './protectedRoute';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Dash />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
