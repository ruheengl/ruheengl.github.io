import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, ALL_TAGS } from '../data/projects';
import Footer from '../components/Footer';
import './Work.css';

export default function Work() {
  const [active, setActive] = useState('All');

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); }),
      { threshold: 0.06 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [active]);

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.tags.includes(active));
  const rotations = [-.7,.5,-.4,.9,-.6,.3,-.8,.6];

  return (
    <div className="work page-enter">
      <div className="work-hero">
        <p className="work-eyebrow reveal">My work</p>
        <h1 className="reveal" style={{ transitionDelay:'.06s' }}>Things I've<br /><em>built</em></h1>
        <svg className="doodle-wave reveal" style={{ transitionDelay:'.1s' }} viewBox="0 0 320 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 9 C40 2,80 16,120 9 C160 2,200 16,240 9 C280 2,310 14,316 9" stroke="#1a1510" strokeWidth="2" strokeLinecap="round" opacity=".4"/>
        </svg>
      </div>

      <div className="work-filters reveal">
        {ALL_TAGS.map(tag => (
          <button key={tag} className={`filter-btn ${active===tag?'filter-active':''}`} onClick={() => setActive(tag)}>{tag}</button>
        ))}
      </div>

      <div className="work-grid">
        {filtered.map((p, i) => (
          <Link key={p.id} to={`/work/${p.id}`} className="work-card reveal"
            style={{ '--cr':`${rotations[i%rotations.length]}deg`, transitionDelay:`${(i%4)*.07}s` }}>
            <div className="tape" style={{ '--tr':`${i%2===0?-2:2}deg` }} />
            <div className="work-thumb">
              <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="12" width="176" height="96" rx="4" stroke="#1a1510" strokeWidth="1.2" strokeDasharray="5 3" opacity=".16"/>
                <text x="50%" y="52%" dominantBaseline="middle" textAnchor="middle"
                  fontFamily="Reenie Beanie, cursive" fontSize="18" fill="#1a1510" opacity=".16">{p.title}</text>
              </svg>
            </div>
            <div className="work-body">
              <span className="work-cat">{p.category}</span>
              <h3 className="work-title">{p.title}</h3>
              <p className="work-short">{p.short}</p>
              <div className="work-pills">
                {p.techs.slice(0,3).map(t => <span key={t} className="pill">{t}</span>)}
                {p.techs.length > 3 && <span className="pill">+{p.techs.length-3}</span>}
              </div>
            </div>
            <span className="work-year">{p.year}</span>
            <span className="work-hint">open project</span>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
