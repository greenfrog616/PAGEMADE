import "./App.css";
import Naver from "./naver/naver";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Naver />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
