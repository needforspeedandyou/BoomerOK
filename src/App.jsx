import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { useState } from "react";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetails } from "./pages/ProjectDetails";
import { SellPage } from "./pages/SellPage";

function App() {
  const [lang, setLang] = useState("English");

  return (
    <>
      <BrowserRouter>
        <Header lang={lang} />
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/projects" element={<ProjectsPage></ProjectsPage>} />
          <Route path="/sell" element={<SellPage></SellPage>}></Route>
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
