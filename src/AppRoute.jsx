// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import VisitorCounter from "./VisitorCounter";

// import Home from "./components/Home";
// import LoveYou from "./components/yes";
// import LoveLetterPopup from "./components/LoveLetterPopup";

// function AppRoute() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/yes" element={<LoveYou />} />

//         {/* <Route path="/letter" element={<LoveLetterPopup />} /> */}
//         {/* Redirect any unknown route to Home */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default AppRoute;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import VisitorCounter from "./components/VisitorCounter";

import Home from "./components/Home";
import LoveYou from "./components/yes";
// import LoveLetterPopup from "./components/LoveLetterPopup";

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
    </BrowserRouter>
  );
}

export default AppRoute;
