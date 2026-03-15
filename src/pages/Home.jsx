import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Home.css';
import heroSketch from '../assets/sketch.png';

export default function Home() {
  const sketchRef = useRef(null);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); }),
      { threshold: 0.08 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!sketchRef.current) return;
      const rx = (e.clientY / window.innerHeight - 0.5) * 6;
      const ry = (e.clientX / window.innerWidth - 0.5) * -6;
      sketchRef.current.style.transform = `rotate(${ry * 0.25}deg) translateY(${rx * 0.4}px)`;
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="home page-enter">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-left">
          <p className="hero-eyebrow reveal">AR / VR Developer & Researcher</p>
          <h1 className="reveal" style={{ transitionDelay: '.07s' }}>
            Hi, I'm<br /><em>Ruhee</em>
          </h1>
          <p className="hero-sub reveal" style={{ transitionDelay: '.14s' }}>
            I build things that <strong>don't live on flat screens</strong>.
          </p>
          <div className="hero-tags reveal" style={{ transitionDelay: '.2s' }}>
            {['AR / VR', 'Unity', 'Research', 'Unreal', 'Visualization'].map((t, i) => (
              <span key={t} className="hero-tag" style={{ '--r': `${[-1.5,.8,-.5,1.2,-.3][i]}deg` }}>{t}</span>
            ))}
          </div>
          <div className="hero-btns reveal" style={{ transitionDelay: '.26s' }}>
            <Link to="/work" className="btn btn-solid">See my work</Link>
            <Link to="/contact" className="btn btn-outline">Get in touch</Link>
          </div>
        </div>

        {/* Hand-drawn illustration */}
        {/* <div className="hero-right reveal" style={{ transitionDelay: '.18s' }} ref={sketchRef}> */}
          {/* <img src={heroSketch} alt="AR/VR sketch" className="hero-svg" /> */}
          {/* <span className="ann ann-1">AR glasses</span>
          <span className="ann ann-2">holographic UI</span>
          <span className="ann ann-3">Unity + XReal</span> */}
        {/* </div> */}
        <div className="hero-right reveal" style={{ transitionDelay: '.18s' }}>
          <svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" fill="none" className="hero-svg">

            {/* ── FLOATING UI PANELS — top left, projected ── */}
            {/* panel top-left */}
            <rect x="8" y="12" width="78" height="56" rx="3"
              stroke="#1a1510" strokeWidth="1.2" opacity=".45" fill="rgba(26,21,16,0.02)"/>
            <line x1="16" y1="26" x2="78" y2="26" stroke="#1a1510" strokeWidth=".8" opacity=".3"/>
            <line x1="16" y1="36" x2="60" y2="36" stroke="#1a1510" strokeWidth=".8" opacity=".25"/>
            <line x1="16" y1="46" x2="70" y2="46" stroke="#1a1510" strokeWidth=".8" opacity=".2"/>
            <circle cx="16" cy="56" r="3" fill="rgba(26,21,16,0.25)" opacity=".5"/>
            <line x1="16" y1="56" x2="26" y2="56" stroke="#1a1510" strokeWidth=".8" opacity=".25"/>
            {/* dashed connector to glasses left */}
            <line x1="86" y1="46" x2="108" y2="116"
              stroke="#1a1510" strokeWidth=".9" opacity=".2" strokeDasharray="3 3"/>

            {/* panel top-right */}
            <rect x="252" y="8" width="78" height="56" rx="3"
              stroke="#1a1510" strokeWidth="1.2" opacity=".45" fill="rgba(26,21,16,0.02)"/>
            <line x1="260" y1="22" x2="322" y2="22" stroke="#1a1510" strokeWidth=".8" opacity=".3"/>
            <line x1="260" y1="32" x2="304" y2="32" stroke="#1a1510" strokeWidth=".8" opacity=".25"/>
            <line x1="260" y1="42" x2="314" y2="42" stroke="#1a1510" strokeWidth=".8" opacity=".2"/>
            {/* small bar chart inside */}
            <rect x="262" y="50" width="6" height="10" rx="1" fill="rgba(26,21,16,0.2)" opacity=".5"/>
            <rect x="272" y="44" width="6" height="16" rx="1" fill="rgba(26,21,16,0.2)" opacity=".5"/>
            <rect x="282" y="48" width="6" height="12" rx="1" fill="rgba(26,21,16,0.2)" opacity=".5"/>
            {/* dashed connector to glasses right */}
            <line x1="254" y1="48" x2="232" y2="116"
              stroke="#1a1510" strokeWidth=".9" opacity=".2" strokeDasharray="3 3"/>

            {/* panel bottom — transcript/text style */}
            <rect x="100" y="202" width="140" height="46" rx="3"
              stroke="#1a1510" strokeWidth="1.2" opacity=".4" fill="rgba(26,21,16,0.02)"/>
            <line x1="110" y1="216" x2="232" y2="216" stroke="#1a1510" strokeWidth=".8" opacity=".3"/>
            <line x1="110" y1="226" x2="214" y2="226" stroke="#1a1510" strokeWidth=".8" opacity=".25"/>
            <line x1="110" y1="236" x2="222" y2="236" stroke="#1a1510" strokeWidth=".8" opacity=".2"/>
            {/* connector up */}
            <line x1="170" y1="185" x2="170" y2="202"
              stroke="#1a1510" strokeWidth=".9" opacity=".2" strokeDasharray="2 2"/>

            {/* ── AR GLASSES FRAME ── */}
            {/* left arm / temple */}
            <path d="M8 128 Q18 126 38 124 L108 120"
              stroke="#1a1510" strokeWidth="2.8" strokeLinecap="round"/>
            {/* right arm / temple */}
            <path d="M332 128 Q322 126 302 124 L232 120"
              stroke="#1a1510" strokeWidth="2.8" strokeLinecap="round"/>

            {/* left lens frame — slim, wide */}
            <rect x="62" y="104" width="96" height="52" rx="10"
              stroke="#1a1510" strokeWidth="2.4" fill="rgba(26,21,16,0.03)"/>

            {/* right lens frame */}
            <rect x="182" y="104" width="96" height="52" rx="10"
              stroke="#1a1510" strokeWidth="2.4" fill="rgba(26,21,16,0.03)"/>

            {/* nose bridge */}
            <path d="M158 122 Q170 132 182 122"
              stroke="#1a1510" strokeWidth="2.2" fill="none" strokeLinecap="round"/>

            {/* ── LENS DETAILS — AR tint / scan lines ── */}
            {[110, 118, 126, 148].map(y => (
              <line key={`ll${y}`} x1="66" y1={y} x2="154" y2={y}
                stroke="#1a1510" strokeWidth=".5" opacity=".08"/>
            ))}
            {[110, 118, 126, 148].map(y => (
              <line key={`rl${y}`} x1="186" y1={y} x2="274" y2={y}
                stroke="#1a1510" strokeWidth=".5" opacity=".08"/>
            ))}

            {/* AR projection glow marks on lenses */}
            <rect x="74" y="112" width="40" height="24" rx="3"
              stroke="#1a1510" strokeWidth=".9" opacity=".2" strokeDasharray="2 2"/>
            <rect x="192" y="112" width="40" height="24" rx="3"
              stroke="#1a1510" strokeWidth=".9" opacity=".2" strokeDasharray="2 2"/>

            {/* ── TECHNICAL CORNER BRACKETS ── */}
            <path d="M70 110 L62 110 L62 118" stroke="#1a1510" strokeWidth="1.2" opacity=".35"/>
            <path d="M150 110 L158 110 L158 118" stroke="#1a1510" strokeWidth="1.2" opacity=".35"/>
            <path d="M70 150 L62 150 L62 142" stroke="#1a1510" strokeWidth="1.2" opacity=".35"/>
            <path d="M150 150 L158 150 L158 142" stroke="#1a1510" strokeWidth="1.2" opacity=".35"/>
            <path d="M190 110 L182 110 L182 118" stroke="#1a1510" strokeWidth="1.2" opacity=".35"/>
            <path d="M270 110 L278 110 L278 118" stroke="#1a1510" strokeWidth="1.2" opacity=".35"/>
            <path d="M190 150 L182 150 L182 142" stroke="#1a1510" strokeWidth="1.2" opacity=".35"/>
            <path d="M270 150 L278 150 L278 142" stroke="#1a1510" strokeWidth="1.2" opacity=".35"/>

            {/* ── SMALL ANNOTATION LABELS ── */}
            <text x="170" y="100" textAnchor="middle"
              fontFamily="Kalam, cursive" fontSize="11" fill="#1a1510" opacity=".35">
              AR glasses
            </text>
            <text x="47" y="186" textAnchor="middle"
              fontFamily="Kalam, cursive" fontSize="10" fill="#1a1510" opacity=".3"
              transform="rotate(-15, 47, 186)">
              spatial UI
            </text>
            <text x="290" y="190" textAnchor="middle"
              fontFamily="Kalam, cursive" fontSize="10" fill="#1a1510" opacity=".3"
              transform="rotate(12, 290, 190)">
              real-time
            </text>

          </svg>
        </div>
      </section>

      {/* ── ABOUT — revealed on scroll ──
      <section className="home-about">
        <div className="about-eyebrow reveal">About me</div>
        <h2 className="about-heading reveal" style={{ transitionDelay: '.06s' }}>
          The person<br /><em>behind the headset</em>
        </h2>
        <div className="about-cols">
          <div className="about-text">
            <p className="reveal" style={{ transitionDelay: '.08s' }}>
              I build AR/VR experiences that move software beyond screens, and spatial systems that bring real-world context to life.
            </p>
            <p className="reveal" style={{ transitionDelay: '.13s' }}>
              I'm an <strong>M.S. Visualization student at Texas A&M University</strong>, working as a Research Assistant with Dr. Wai Tong and Dr. Meng Xia. My current research project is <strong>ARgueVis</strong> — an AR glasses system that transcribes live conversations, summarizes arguments, and highlights evidence in real time through a heads-up display you wear.
            </p>
            <p className="reveal" style={{ transitionDelay: '.18s' }}>
              Prior to grad school, I was an Associate Software Developer at <strong>Oracle</strong> for three years, building production-scale backend systems. Before that, I interned as an AR Developer at <strong>Persistent Systems</strong>, shipping spatial experiences for mobile and glasses-based platforms.
            </p>
            <p className="reveal" style={{ transitionDelay: '.23s' }}>
              I graduated from the <strong>College of Engineering Pune</strong> with a Bachelor's degree in Computer Engineering.
            </p>
            <p className="reveal" style={{ transitionDelay: '.28s' }}>
              Thank you for taking the time to visit! If you'd like a quick overview of my work, please check out my{' '}
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="about-link">resume</a>.
              Feel free to look around. : )
            </p>
          </div>
          <aside className="about-aside reveal" style={{ transitionDelay: '.15s' }}>
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
          </aside>
        </div>
        <div className="about-btns reveal" style={{ transitionDelay: '.3s' }}>
          <Link to="/work" className="btn btn-solid">See my work</Link>
          <Link to="/contact" className="btn btn-outline">Get in touch</Link>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
