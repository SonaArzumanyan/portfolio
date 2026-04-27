import { Navigate, Route, Routes } from "react-router-dom";
import { PortfolioLayout } from "../layouts/PortfolioLayout";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { CVGeneratorPage } from "../pages/CVGeneratorPage";
import { CVPage } from "../pages/CVPage";


export function AppRouter() {
  return (
    <Routes>
      <Route element={<PortfolioLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cv-generator" element={<CVGeneratorPage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
