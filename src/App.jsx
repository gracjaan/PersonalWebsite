import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./pages/Main";
import BlankStudio from "./pages/temp/BlankStudio";
import StanStore from "./pages/temp/StanStore";
import Icon from "./pages/temp/Icon";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/stanstore" element={<StanStore />} />
        <Route path="/blankstudio" element={<BlankStudio />} />
        <Route path="/icon" element={<Icon />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;