import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState('hero');

  // Listen for section changes fired from Home
  useEffect(() => {
    const handler = (e) => setActive(e.detail);
    window.addEventListener('sectionchange', handler);
    return () => window.removeEventListener('sectionchange', handler);
  }, []);

  // Set active from URL on load
  useEffect(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (hash && hash !== '') setActive(hash);
    else setActive('hero');
  }, [location]);

  const scrollTo = (id) => {
    if (location.pathname.startsWith('/work/') || !document.getElementById(id)) {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="nav">
      <button className="nav-logo" onClick={() => scrollTo('hero')}>
        Ruhee <em>Nagulwar</em>
      </button>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.id}>
            <button
              onClick={() => scrollTo(l.id)}
              className={active === l.id ? 'nav-active' : ''}
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
