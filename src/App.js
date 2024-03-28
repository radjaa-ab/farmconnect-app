import Maain from "./Pages/Maain";
import Home from './Pages/Home';
import Messaging from './Pages/Messaging'
import './Styles/Style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Maain />} />
          <Route path="Home/" element={<Home />} />
          <Route path="Messaging/" element={<Messaging />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;