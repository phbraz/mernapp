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
import { Register } from "./users/pages/register";
import { Widget } from "./shared/components/Widget";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Dashboard } from "./places/pages/Dashboard";

function App() {
  const cookies = new Cookies();

  const token = cookies.get("token");

  if (!token) {
    return (
      <div className="min-h-screen bg-zinc-900">
        <NavBar isUserAuthenticated={false} />
        <Router>
          <Routes>
            <Route path="/account/register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900">
      <NavBar isUserAuthenticated={true} />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/userlist" element={<UserIndex />} />
          <Route
            path="/user/income"
            element={"<h1>Hello from user Income</h1>"}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
