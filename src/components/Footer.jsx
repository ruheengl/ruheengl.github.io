import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copy">Ruhee Nagulwar</p>
      <div className="footer-links">
        <a href="https://www.behance.net/ruheenagulwar" target="_blank" rel="noreferrer">Behance</a>
        <a href="https://linkedin.com/in/ruhee-nagulwar" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/ruheengl" target="_blank" rel="noreferrer">GitHub</a>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}
