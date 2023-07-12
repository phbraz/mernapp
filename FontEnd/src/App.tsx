import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { UserIndex } from "./users/pages";
import {QueryClient, QueryClientProvider} from "react-query";
import {NavBar} from "./shared/components/NavBar";
import {UserFields} from "./interfaces/UserFields";

const queryClient = new QueryClient();

function App() {
  const currentUser: UserFields = {
    UserName: "paulobraz",
    Id: 1,
    Email: "paulo.braz@hotmail.com",
    FirstName: "Paulo",
    LastName: "Braz",
  };

  return (
    <div className="min-h-screen bg-zinc-900">
      <QueryClientProvider client={queryClient}>
        <NavBar UserName={currentUser.UserName} />
        <Router>
          <Routes>
            <Route path="/" element={<UserIndex />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
