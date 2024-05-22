import { Route, Routes } from "react-router-dom";
import Template from "./pages/_TemplatePage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />} >
        <Route index element={<HomePage />} />
        {/* <Route path="generator" element={<GeneratorPage />} />
        <Route path="genrator/saved" element={<SavedThemesPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
