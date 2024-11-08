import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Project from "./pages/Project";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/project" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
