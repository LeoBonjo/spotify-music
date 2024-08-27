import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DocsPage from "./pages/DocsPage";
import ErrorPage from "./components/Error";

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
  const [token, setToken] = useState(
    "BQCj2UcMkXhSnP6PPxzMWwBNHOn0uQAsm6YDYE9ZqJMrRQQS_KDfBlxmrOksiCEw9tfvo-gtxzw1HniYI8lO04eR5Z3SUQCV5IF6NQxfeglXI_G4MGS0iWP3ENP7scnq28GAkPnZ3zlxfYUU00jJiDTFC4Px2e4toRXwcgs3kRpMAFS3R_vH8hBM9vK9v3F82r9aCTe9KwGZ3hoaYWA"
  );

  useEffect(() => {
    async function getToken() {
      const response = await fetch("/auth/token");

      const json = await response.json();

      setToken(json.access_token);
    }

    getToken();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage token={token} />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="docs" element={<DocsPage />} />
        {/* <Route path="error" element={<ErrorPage />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
