import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import BlankStudio from "./pages/temp/BlankStudio";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blankstudio" element={<BlankStudio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;