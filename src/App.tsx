import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { UserIndex } from "./users/pages";

function App() {
  return (
    <div className="h-screen bg-zinc-900">
      <Router>
        <Routes>
          <Route path="/" element={<UserIndex />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
