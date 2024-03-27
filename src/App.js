// App.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Messaging from './Pages/Messaging';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Messaging />} />
          {/* Add more routes here */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
