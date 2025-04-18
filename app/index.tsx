// index.tsx or main entry point
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home"; // Import Home component
import "./styles.css"; // Assuming you're using TailwindCSS or other styles

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes here */}
        <Route path="/" element={<Home />} />
        {/* Add more routes if needed */}
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
