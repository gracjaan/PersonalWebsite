import { HashRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import BlankStudio from "./pages/temp/BlankStudio";
import "./App.css";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/blankstudio" element={<BlankStudio />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;