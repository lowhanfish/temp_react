import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
// import Login from "./auth/Login.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Profile from "./pages/profile.jsx";
import Template1 from "./pages/example/template1.jsx";

import Login from "./auth/login.jsx";


function App() {
  return (
    <Router>
      <Routes>
        {/* Auth routes tanpa drawer */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Pages routes dengan drawer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Template1" element={<Template1 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
