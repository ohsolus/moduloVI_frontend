import "./App.css";
import Offert from "./pages/Offert";
import Update from "./pages/Update";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Offert />} />
          <Route path="/add" element={<Edit />} />
          <Route path="/update/:idOfferts" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
