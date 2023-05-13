import React from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Done from "./pages/Done";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/done" element={<Done />} />
      </Routes>
    </div>
  );
};

export default App;
