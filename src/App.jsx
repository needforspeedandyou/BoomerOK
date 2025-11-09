import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { useState } from "react";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetails } from "./pages/ProjectDetails";
import { SellPage } from "./pages/SellPage";
import { AuthPage } from "./pages/AuthPage";
import { useEffect } from "react";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(localStorage.getItem("admin") == "true");
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header isAdmin={isAdmin} />
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/projects" element={<ProjectsPage></ProjectsPage>} />
          <Route path="/sell" element={<SellPage admin={isAdmin}></SellPage>}></Route>
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/auth" element={<AuthPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
