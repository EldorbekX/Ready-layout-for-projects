import { ReactNode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginP from "./pages/LoginP";
import AdminLayout from "./components/layout";
import DashboardP from "./pages/DashboardP";
import UsersP from "./pages/UsersP";
import ExperiencesP from "./pages/ExperiencesP";
import SkillsP from "./pages/SkillsP";
import EducationP from "./pages/EducationP";
import MessagesP from "./pages/MessagesP";
import AccountP from "./pages/AccountP";
import { useAuth } from "./states/auth";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginP />}
        />
        <Route path="/" element={<AdminLayout />}>
          <Route
            path="dashboard"
            element={isAuthenticated ? <DashboardP /> : <Navigate to="/" />}
          />
          <Route path="users" element={<UsersP />} />
          <Route path="experiences" element={<ExperiencesP />} />
          <Route path="skills" element={<SkillsP />} />
          <Route path="education" element={<EducationP />} />
          <Route path="messages" element={<MessagesP />} />
          <Route path="account" element={<AccountP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// type RouteType = {
//   path: string;
//   element: ReactNode;
// };

// const ProtectedRoute = ({ path, element }: RouteType) => {
//   const { isAuthenticated } = useAuth();
//   return (
//     <Route
//       path={path}
//       element={isAuthenticated ? element : <Navigate to="/" />}
//     />
//   );
// };

export default App;
