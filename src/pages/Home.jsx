import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PROJECTS, ALL_TAGS } from '../data/projects';
import Footer from '../components/Footer';
import heroSketch from '../assets/sketch.png';
import './Home.css';

const SKILLS = [
  { name: 'AR / VR Dev' }, { name: 'Unity' }, { name: 'Unreal Engine' },
  { name: 'Vuforia' }, { name: 'ARCore' }, { name: 'Spark AR' },
  { name: 'C#' }, { name: 'Java' }, { name: 'Python' },
  { name: 'C++' }, { name: 'JavaScript' }, { name: 'SQL' },
  { name: 'Spring' }, { name: 'REST APIs' }, { name: 'Docker' },
  { name: 'Git' }, { name: 'Linux' }, { name: 'Blender' },
];

export default function Home() {
  const [activeTag, setActiveTag] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-section');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && e.intersectionRatio >= 0.4) {
          const id = e.target.id;
          const url = id === 'hero' ? '/' : `/${id}`;
          window.history.replaceState(null, '', `#${url}`);
          window.dispatchEvent(new CustomEvent('sectionchange', { detail: id }));
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '') || 'hero';
    const el = document.getElementById(hash === '' ? 'hero' : hash);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'instant' }), 50);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); }),
      { threshold: 0.07 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [activeTag]);

  const filtered = activeTag === 'All' ? PROJECTS : PROJECTS.filter(p => p.tags.includes(activeTag));
  const rotations = [-.7, .5, -.4, .9, -.6, .3, -.8, .6];

  return (
    <div className="home">

      {/* ══ HERO ══ */}
      <section className="scroll-section hero-section" id="hero">
        <div className="hero-inner">
          <div className="hero-left">
            {/* <p className="hero-eyebrow reveal">Software Engineer & AR/VR Researcher</p> */}
            <h1 className="reveal" style={{ transitionDelay: '.06s' }}>
              Hi, I'm<br /><em>Ruhee</em>
            </h1>
            <p className="hero-sub reveal" style={{ transitionDelay: '.12s' }}>
              I build things that <strong>don't live on flat screens</strong>.
            </p>
            <div className="hero-tags reveal" style={{ transitionDelay: '.18s' }}>
              {['Software', 'AR / VR', 'Human-Computer Interaction'].map((t, i) => (
                <span key={t} className="hero-tag" style={{ '--r': `${[-1.5,.8,-.5][i]}deg` }}>{t}</span>
              ))}
            </div>
            <div className="hero-btns reveal" style={{ transitionDelay: '.24s' }}>
              <button className="btn btn-solid" onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}>
                See my work
              </button>
              <button className="btn btn-outline" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Get in touch
              </button>
            </div>
          </div>
          <div className="hero-right reveal" style={{ transitionDelay: '.18s' }}>
            <img src={heroSketch} alt="AR/VR sketch" className="hero-img" />
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section className="scroll-section about-section" id="about">
        <div className="section-inner">
          <div className="section-label reveal">About</div>
          <h2 className="section-heading reveal" style={{ transitionDelay: '.04s' }}>
            The person<br /><span className="heading-underline">behind the headset</span>
          </h2>
          <div className="about-grid">
            <div className="about-text">
              <p className="reveal">I build AR/VR experiences that move software beyond screens, and research systems that turn real-world context into action.</p>
              <p className="reveal" style={{ transitionDelay: '.07s' }}>I'm an <strong>M.S. Visualization student at Texas A&M</strong>, working as a Research Assistant with Dr. Wai Tong and Dr. Meng Xia on ARgueVis — an AR glasses system that summarizes arguments and highlights evidence in real time during live conversations.</p>
              <p className="reveal" style={{ transitionDelay: '.12s' }}>Prior to this, I was an Associate Software Developer at <strong>Oracle</strong> for three years, building production backend systems. Before that, I interned as an AR Developer at <strong>Persistent Systems</strong>.</p>
              <p className="reveal" style={{ transitionDelay: '.17s' }}>I graduated from the <strong>College of Engineering Pune</strong> with a degree in <strong>Computer Engineering</strong>.</p>
              <p className="reveal" style={{ transitionDelay: '.22s' }}>
                Thank you for visiting! Check out my{' '}
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-link">resume</a>.
                {' '}Feel free to look around. : )
              </p>
            </div>
            <aside className="about-aside reveal" style={{ transitionDelay: '.1s' }}>
              <div className="aside-block">
                <div className="aside-label">Now</div>
                <ul className="aside-list">
                  <li>Master of Science in Visualization</li>
                  <li>Texas A&M University</li>
                  <li>College Station, TX</li>
                </ul>
              </div>
              <div className="aside-block">
                <div className="aside-label">Skills</div>
                <div className="skills-wrap">
                  {SKILLS.map(s => (
                    <span key={s.name} className="skill-chip">{s.name}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ══ WORK ══ */}
      <section className="scroll-section work-section" id="work">
        <div className="section-inner">
          <div className="section-label reveal">Work</div>
          <h2 className="section-heading reveal" style={{ transitionDelay: '.04s' }}>
            <span className="heading-underline">Things I've built</span>
          </h2>
          <div className="work-filters reveal" style={{ transitionDelay: '.08s' }}>
            {ALL_TAGS.map(tag => (
              <button
                key={tag}
                className={`filter-btn ${activeTag === tag ? 'filter-active' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="work-grid">
            {filtered.map((p, i) => (
              <Link
                key={p.id}
                to={`/work/${p.id}`}
                className="work-card reveal"
                style={{ '--cr': `${rotations[i % rotations.length]}deg`, transitionDelay: `${(i % 4) * .06}s` }}
              >
                <div className="tape" style={{ '--tr': `${i % 2 === 0 ? -2 : 2}deg` }} />
                <div className="work-thumb" />
                <div className="work-body">
                  <span className="work-cat">{p.category}</span>
                  <h3 className="work-title">{p.title}</h3>
                  <p className="work-short">{p.short}</p>
                  {p.stat && <span className="work-stat">{p.stat}</span>}
                  <div className="work-pills">
                    {p.techs.slice(0, 3).map(t => <span key={t} className="pill">{t}</span>)}
                    {p.techs.length > 3 && <span className="pill">+{p.techs.length - 3}</span>}
                  </div>
                </div>
                <span className="work-year">{p.year}</span>
                <span className="work-hint">open →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section className="scroll-section contact-section" id="contact">
        <div className="section-inner contact-inner">
          <div className="section-label reveal">Contact</div>
          <h2 className="section-heading reveal" style={{ transitionDelay: '.04s' }}>
            <span className="heading-underline">Let's talk</span>
          </h2>
          <div className="contact-grid">
            <div className="contact-left">
              <p className="contact-sub reveal" style={{ transitionDelay: '.08s' }}>
                Always happy to chat about AR/VR, research collaborations, or if you just want to reach out.
              </p>
              <div className="contact-links reveal" style={{ transitionDelay: '.13s' }}>
                <a href="mailto:ruhee.nagulwar@gmail.com" className="c-link">
                  <span className="c-label">Email</span>
                  <span className="c-val">ruhee.nagulwar@gmail.com →</span>
                </a>
                <a href="https://linkedin.com/in/ruhee-nagulwar" target="_blank" rel="noreferrer" className="c-link">
                  <span className="c-label">LinkedIn</span>
                  <span className="c-val">ruhee-nagulwar →</span>
                </a>
                <a href="https://github.com/ruheengl" target="_blank" rel="noreferrer" className="c-link">
                  <span className="c-label">GitHub</span>
                  <span className="c-val">ruheengl →</span>
                </a>
                <a href="https://www.behance.net/ruheenagulwar" target="_blank" rel="noreferrer" className="c-link">
                  <span className="c-label">Behance</span>
                  <span className="c-val">ruheenagulwar →</span>
                </a>
              </div>
            </div>
            {/* envelope + sticky note */}
            <aside className="contact-aside reveal" style={{ transitionDelay: '.1s' }}>
              <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="envelope-svg">
                <rect x="16" y="48" width="208" height="118" rx="5" fill="#f5f5f5" stroke="#111" strokeWidth="2"/>
                <path d="M16 55 L120 120 L224 55" stroke="#111" strokeWidth="2"/>
                <path d="M16 166 L82 114" stroke="#111" strokeWidth="1.5" strokeDasharray="3 2" opacity=".4"/>
                <path d="M224 166 L158 114" stroke="#111" strokeWidth="1.5" strokeDasharray="3 2" opacity=".4"/>
                <circle cx="120" cy="116" r="14" fill="rgba(17,17,17,0.06)" stroke="#111" strokeWidth="1.5"/>
                <text x="120" y="121" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="13" fill="#111" opacity=".6">R</text>
                <text x="62" y="38" fontFamily="Caveat, cursive" fontSize="16" fill="#555" opacity=".8">say hello —</text>
              </svg>
              <div className="contact-sticky">
                <div className="sticky-label">Response time</div>
                <p>Usually within a day or two. I read everything.</p>
              </div>
              <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-doodle">
                <path d="M8 30 Q30 8 64 24" stroke="#111" strokeWidth="1.5" strokeDasharray="3 2" strokeLinecap="round" opacity=".3"/>
                <path d="M56 18 L68 26 L58 34" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity=".3"/>
              </svg>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
