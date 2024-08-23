import { Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DocsPage from "./pages/DocsPage";

// Layout component that includes shared UI elements
const Layout = () => {
  return (
    <div id="Layout">
      <div className="min-h-screen">
        {/* navigation bar present on all pages */}
        <NavBar />
        <main>
          {/* renders the child route components */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="docs" element={<DocsPage />} />
      </Route>
    </Routes>
  );
};

// export the App component so it can be used in other files
export default App;
