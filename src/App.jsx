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
    "BQAtiLIHQKa39SiO6sc5kOPoLOWR05EU3rKMSqdmVlChvFts-o7IcMmXEURLm6atwvZHF0Ta1n8L6E-ZmAUrkDnt9lMHXPYk4Y9oFBnAu-I3u6IvvBXja9lTEtzBiGMLQ4P4MIwktigXGyqgC0BKtrKWpx5IfkhuUIZWwS332HmPIkViFbkXUBgdpfd-zmWjYmoLSeg6seXdiGbSwh6uN47GBux39T-vqd-6cMvxLYlKPDmXX2dI-hPsegIdeUoPiL1fMKNRccBasxAhbtsF-w60INGIjKx_IXoYtaSRuoZLUmI3COcMBtxDqNXEjtWmT9bBPDFb-PH58Q"
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
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="docs" element={<DocsPage />} />
        {/* <Route path="error" element={<ErrorPage />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
