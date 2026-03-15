import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './About.css';

const SKILLS = [
  // AR/VR — your differentiator, keep these prominent
  { name: 'AR / VR Dev', r: -1.8 },
  { name: 'Unity', r: .8},
  { name: 'Unreal Engine', r: -1 },
  { name: 'Vuforia', r: 1.5 },
  { name: 'ARCore', r: -.6 },
  { name: 'Spark AR', r: .5 },
  // Languages — show you write real code
  { name: 'C#', r: 1.2 },
  { name: 'Java', r: -1.4 },
  { name: 'Python', r: .8 },
  { name: 'C++', r: -1 },
  { name: 'JavaScript', r: 1.5 },
  { name: 'SQL', r: -.7 },
  // Backend / Infra — Oracle experience
  { name: 'Spring', r: 1.2 },
  { name: 'REST APIs', r: -.9 },
  { name: 'Docker', r: .6 },
  { name: 'Git', r: -1.4 },
  { name: 'Linux', r: 1 },
  // Design / Visualization
  { name: 'Blender', r: -.8 },
  { name: 'Research Design', r: -.5 },
];

export default function About() {
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
    <div className="about page-enter">
      <div className="about-hero">
        <p className="about-eyebrow reveal">About me</p>
        <h1 className="reveal" style={{ transitionDelay:'.06s' }}>The person<br /><em>behind the headset</em></h1>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p className="reveal">I build AR/VR experiences that move software beyond screens, and research systems that turn real-world context into action.</p>
          <p className="reveal" style={{ transitionDelay:'.07s' }}>I'm an <strong>M.S. Visualization student at Texas A&M</strong>, working as a Research Assistant with Dr. Wai Tong and Dr. Meng Xia on <strong>ARgueVis</strong> — an AR glasses system that summarizes arguments and highlights evidence in real time during live conversations.</p>
          <p className="reveal" style={{ transitionDelay:'.12s' }}>Prior to this, I was an Associate Software Developer at <strong>Oracle</strong> and an AR Intern at <strong>Persistent Systems</strong>, where I built production systems and shipped spatial experiences across mobile and glasses-based platforms.</p>
          <p className="reveal" style={{ transitionDelay:'.17s' }}>Before that, I graduated from the <strong>College of Engineering Pune</strong> with a degree in Computer Engineering.</p>
          <p className="reveal" style={{ transitionDelay:'.22s' }}>Thank you for taking the time to visit my website! If you'd like a quick overview of my work, please check out my <a href="/resume.pdf" target="_blank" rel="noreferrer" className="about-link">resume</a>.</p>
          <p className="reveal" style={{ transitionDelay:'.27s' }}>Feel free to look around. : )</p>
          <div className="about-cta reveal" style={{ transitionDelay:'.22s' }}>
            <Link to="/work" className="btn btn-solid">See my work</Link>
            <Link to="/contact" className="btn btn-outline">Get in touch</Link>
          </div>
        </div>

        <aside className="about-aside reveal">
          <div className="info-sticky">
            <div className="sticky-head">Now</div>
            <ul className="info-list">
              <li>College Station, TX</li>
              <li>TAMU Visualization (MS)</li>
              <li>AR/VR Research</li>
              <li>Open to internships 2025</li>
            </ul>
          </div>
          <div className="info-sticky quote-sticky">
            <div className="sticky-head">Belief</div>
            <p>"Make software that escapes the rectangle."</p>
          </div>
          <svg viewBox="0 0 140 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="aside-doodle">
            <circle cx="70" cy="62" r="38" stroke="#1a1510" strokeWidth="1.8" strokeDasharray="5 3"/>
            <path d="M52 100 L52 116 Q70 128 88 116 L88 100" stroke="#1a1510" strokeWidth="1.8"/>
            <line x1="56" y1="106" x2="84" y2="106" stroke="#1a1510" strokeWidth="1.5"/>
            <line x1="58" y1="112" x2="82" y2="112" stroke="#1a1510" strokeWidth="1.5"/>
            <rect x="54" y="46" width="32" height="22" rx="3" fill="rgba(26,21,16,0.07)" stroke="#1a1510" strokeWidth="1.5"/>
            <line x1="54" y1="55" x2="86" y2="55" stroke="#1a1510" strokeWidth=".9" opacity=".4"/>
            <circle cx="70" cy="63" r="3.5" fill="rgba(26,21,16,0.3)"/>
            <line x1="70" y1="18" x2="70" y2="8" stroke="#1a1510" strokeWidth="1.5" strokeLinecap="round" opacity=".35"/>
            <line x1="96" y1="36" x2="104" y2="30" stroke="#1a1510" strokeWidth="1.5" strokeLinecap="round" opacity=".35"/>
            <line x1="44" y1="36" x2="36" y2="30" stroke="#1a1510" strokeWidth="1.5" strokeLinecap="round" opacity=".35"/>
          </svg>
        </aside>
      </div>

      <section className="skills-section">
        <h2 className="skills-title reveal">My toolbox</h2>
        <div className="skills-scatter reveal" style={{ transitionDelay:'.08s' }}>
          {SKILLS.map(s => (
            <span key={s.name} className={`skill-chip ${s.accent?'skill-accent':''}`} style={{ '--r':`${s.r}deg` }}>{s.name}</span>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
