import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toogle from './components/Toogle';
import Color from './components/Color';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Toogle />} />
          <Route path="/1" element={<Color />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
