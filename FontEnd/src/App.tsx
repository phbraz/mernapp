import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { UserIndex } from "./users/pages";
import { NavBar } from "./shared/components/NavBar";
import { Login } from "./users/pages/login";
import Cookies from "universal-cookie";

function App() {
  const cookies = new Cookies();
  
  const token = cookies.get("token");
  
  if (!token) {
    return (
        <div className="min-h-screen bg-zinc-900">
          <NavBar isUserAuthenticated={false}  />
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
          
        </div>
    )
  }

  
  return (
    <div className="min-h-screen bg-zinc-900">
      <NavBar isUserAuthenticated={true}  />
      <Router>
        <Routes>
          <Route path="/" element={<h1 className="text-white">you are in</h1>} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/userlist" element={<UserIndex />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;