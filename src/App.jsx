import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname.startsWith('/work/')) window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/work" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/work/:id" element={<ProjectDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
