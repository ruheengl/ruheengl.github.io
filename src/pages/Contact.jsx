import { useEffect } from 'react';
import Footer from '../components/Footer';
import './Contact.css';

export default function Contact() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('on'); }),
      { threshold:.07 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="contact page-enter">
      <div className="contact-hero">
        <p className="contact-eyebrow reveal">Get in touch</p>
        <h1 className="reveal" style={{ transitionDelay:'.06s' }}>Let's<br /><em>talk</em></h1>
      </div>

      <div className="contact-grid">
        <div className="contact-left">
          <p className="contact-intro reveal">Always happy to chat about AR/VR, research collaborations, spatial computing, or if you just want to reach out!</p>
          {/* <p className="contact-intro reveal" style={{ transitionDelay:'.07s' }}>Currently open to <strong>internship opportunities</strong> for Summer 2025 in AR/VR, spatial computing, or HCI research.</p> */}

          <div className="contact-links reveal" style={{ transitionDelay:'.13s' }}>
            <a href="mailto:ruhee.nagulwar@gmail.com" className="c-link">
              <span className="c-label">Email</span>
              <span className="c-value">ruhee.nagulwar@gmail.com →<span className="c-arrow">→</span></span>
            </a>
            <a href="https://www.behance.net/ruheenagulwar" target="_blank" rel="noreferrer" className="c-link">
              <span className="c-label">Behance</span>
              <span className="c-value">ruheenagulwar →<span className="c-arrow">→</span></span>
            </a>
            <a href="https://linkedin.com/in/ruhee-nagulwar" target="_blank" rel="noreferrer" className="c-link">
              <span className="c-label">LinkedIn</span>
              <span className="c-value">ruhee-nagulwar <span className="c-arrow">→</span></span>
            </a>
            <a href="https://github.com/ruheengl" target="_blank" rel="noreferrer" className="c-link">
              <span className="c-label">GitHub</span>
              <span className="c-value">ruheengl →<span className="c-arrow"></span></span>
            </a>
          </div>
        </div>

        <aside className="contact-aside reveal" style={{ transitionDelay:'.1s' }}>
          <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="envelope-svg">
            <rect x="16" y="48" width="208" height="118" rx="5" fill="#ede6d3" stroke="#1a1510" strokeWidth="2"/>
            <path d="M16 55 L120 120 L224 55" stroke="#1a1510" strokeWidth="2"/>
            <path d="M16 166 L82 114" stroke="#1a1510" strokeWidth="1.5" strokeDasharray="3 2" opacity=".4"/>
            <path d="M224 166 L158 114" stroke="#1a1510" strokeWidth="1.5" strokeDasharray="3 2" opacity=".4"/>
            <circle cx="120" cy="116" r="14" fill="rgba(26,21,16,0.08)" stroke="#1a1510" strokeWidth="1.5"/>
            <text x="120" y="121" textAnchor="middle" fontFamily="Reenie Beanie, cursive" fontSize="13" fill="#1a1510" opacity=".6">R</text>
            <text x="62" y="38" fontFamily="Caveat, cursive" fontSize="16" fill="#3d3328" opacity=".7">say hello —</text>
          </svg>
          <div className="contact-sticky">
            <div className="sticky-label">Response time</div>
            <p>Usually within a day or two. I read everything.</p>
          </div>
          <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-doodle">
            <path d="M8 30 Q30 8 64 24" stroke="#1a1510" strokeWidth="1.5" strokeDasharray="3 2" strokeLinecap="round"/>
            <path d="M56 18 L68 26 L58 34" stroke="#1a1510" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </aside>
      </div>
      <Footer />
    </div>
  );
}
