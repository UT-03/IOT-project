import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;