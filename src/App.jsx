// import Router, Routes, Route, and Outlet from react-router-dom
import { Routes, Route, Outlet } from 'react-router-dom';
// import NavBar component from components folder
import NavBar from './components/NavBar';
// import HomePage component from pages folder
import HomePage from './pages/HomePage';
// import AboutPage component from pages folder
import AboutPage from './pages/AboutPage';
// import DocsPage component from pages folder
import DocsPage from './pages/DocsPage';

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

// main application component
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* renders HomePage at root path */}
        <Route index element={<HomePage />} />
        {/* renders AboutPage at /about */}
        <Route path="about" element={<AboutPage />} />
        {/* renders DocsPage at /docs */}
        <Route path="docs" element={<DocsPage />} />
      </Route>
    </Routes>
  );
};

// export the App component so it can be used in other files
export default App;
