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
    "BQCLBi2r63zd_3oGlzbS_RUPvSLzdvBg2j-3Tsqql-j_SxMH1l_uxxJTxC9L_6v_4dssrOTGhz_wPvPVLOd_P5BeJWKJlih6DV7MJjiIQbmfLFN3v7VQo2Gg-AFeETwaEsfi8nNiGsO_bG8ZaKY-0v-chLaT3F2yYmibqcej_p7KGmxB-VsN-dstPvP_2aBvRdT1Yz4pWoQHIorBlnI"
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
