import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header';
import LayOut from './components/layout';
import LayOutTwo from './components/layout2';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/startorder" element={<LayOut />} />
        <Route path="/postorder" element={<LayOutTwo />} />
      </Routes>
    </div>
  );
}

export default App;
