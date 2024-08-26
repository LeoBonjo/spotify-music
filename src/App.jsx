import React, { useState, useEffect } from "react";
import WebPlayback from "./components/WebPlayback";
import Login from "./components/Login";
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
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log("hello");
    async function getToken() {
      const response = await fetch("/auth/token");
      console.log(response);
      const json = await response.json();
      console.log(json);
      setToken(json.access_token);
      console.log(json.access_token);
    }

    //getToken();
  }, []);
  return (
    <Routes>
      {/* Replaced <Layout/> with the token stuff in the first Route tag */}
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
