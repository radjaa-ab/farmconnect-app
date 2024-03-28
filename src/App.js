import Maain from "./Pages/Maain";
import Home from './Pages/Home';
import Messaging from './Pages/Messaging'
import './Styles/Style.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Route>
                <Maain />
              </Route>
            }
          />
          <Route path="Home/" element={<Home />} />
          <Route path="Messaging/" element={<Messaging />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;