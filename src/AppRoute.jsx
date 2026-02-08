import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import LoveYou from "./components/yes";
import Footer from "./components/Footer";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yes" element={<LoveYou />} />

        {/* Redirect any unknown route to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Visitor counter runs once when site loads */}
      {/* <VisitorCounter /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoute;
