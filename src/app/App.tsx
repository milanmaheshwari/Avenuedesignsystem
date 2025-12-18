import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TopbarPage from "./pages/TopbarPage";
import CategoryCardPage from "./pages/CategoryCardPage";
import AddItemPage from "./pages/AddItemPage";
import AppNavBarPage from "./pages/AppNavBarPage";
import ArtistCardPage from "./pages/ArtistCardPage";
// Design Token Pages
import ColorsPage from "./pages/tokens/ColorsPage";
import TypographyPage from "./pages/tokens/TypographyPage";
import SpacingPage from "./pages/tokens/SpacingPage";
import CornerRadiusPage from "./pages/tokens/CornerRadiusPage";
import TokenMappingPage from "./pages/tokens/TokenMappingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page - component library index */}
        <Route path="/" element={<HomePage />} />
        
        {/* Component documentation pages */}
        <Route path="/components/topbar" element={<TopbarPage />} />
        <Route path="/components/category-cards" element={<CategoryCardPage />} />
        <Route path="/components/add-item" element={<AddItemPage />} />
        <Route path="/components/app-nav-bar" element={<AppNavBarPage />} />
        <Route path="/components/artist-card" element={<ArtistCardPage />} />
        
        {/* Design token documentation pages */}
        <Route path="/tokens/colors" element={<ColorsPage />} />
        <Route path="/tokens/typography" element={<TypographyPage />} />
        <Route path="/tokens/spacing" element={<SpacingPage />} />
        <Route path="/tokens/corner-radius" element={<CornerRadiusPage />} />
        <Route path="/tokens/mapping" element={<TokenMappingPage />} />
      </Routes>
    </BrowserRouter>
  );
}