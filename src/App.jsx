
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import LoveYou from "./components/yes";

// import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yes" element={<LoveYou />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
