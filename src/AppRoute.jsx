import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import LoveYou from "./components/yes";
import LoveLetterPopup from "./components/LoveLetterPopup";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yes" element={<LoveYou />} />

        {/* <Route path="/letter" element={<LoveLetterPopup />} /> */}
        {/* Redirect any unknown route to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
