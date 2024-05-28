import "./App.css";
import { List } from "./components/List";
import { LikePage } from "./components/LikePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/likes" element={<LikePage />} />
      </Routes>
    </div>
  );
}

export default App;
