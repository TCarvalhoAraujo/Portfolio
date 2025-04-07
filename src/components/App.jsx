import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import GuessTheNumber from "./GuessTheNumber";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />}></Route>
        <Route path="/game" element={<GuessTheNumber />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
