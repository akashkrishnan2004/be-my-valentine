// // VisitorCounter.jsx
// import React, { useEffect, useState } from "react";
// import { ref, get, set } from "firebase/database";
// import { database } from "./firebase";

// function VisitorCounter() {
//   const [visits, setVisits] = useState(0);

//   useEffect(() => {
//     const visitsRef = ref(database, "visits");

//     // Get current count
//     get(visitsRef).then((snapshot) => {
//       let count = snapshot.val() || 0;
//       count += 1; // increment
//       set(visits(count));
//       set(visitsRef, count); // update Firebase
//     });
//   }, []);

//   return (
//     <p style={{ fontSize: "18px", color: "#ff4d6d" }}>
//       Total visitors: {visits}
//     </p>
//   );
// }

// export default VisitorCounter;


import { useEffect, useState } from "react";
import { ref, get, set } from "firebase/database";
import { database } from "../firebase";

function VisitorCounter() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const visitsRef = ref(database, "visits");

    // Check if this user already visited
    const hasVisited = localStorage.getItem("hasVisited");

    get(visitsRef).then((snapshot) => {
      let count = snapshot.val() || 0;

      if (!hasVisited) {
        count += 1; // increment only once per browser
        set(visitsRef, count);
        localStorage.setItem("hasVisited", "true");
      }

      setVisits(count);
    });
  }, []);

  return (
    <p style={{ fontSize: "18px", color: "#ff4d6d" }}>
      Total visitors: {visits}
    </p>
  );
}

export default VisitorCounter;
