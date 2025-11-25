import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetails } from "./pages/ProjectDetails";
import { SellPage } from "./pages/SellPage";
import { ProfilePage } from "./pages/ProfilePage";
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/projects" element={<ProjectsPage></ProjectsPage>} />
          <Route path="/sell" element={<SellPage></SellPage>}></Route>
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
