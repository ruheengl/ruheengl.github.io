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
          {/* <p className="hero-eyebrow reveal"></p> */}
          <h1 className="reveal" style={{ transitionDelay: '.07s' }}>
            Hi, I'm<br /><em>Ruhee</em>
          </h1>
          <p className="hero-sub reveal" style={{ transitionDelay: '.14s' }}>
            I build things that <strong>don't live on flat screens</strong>.
          </p>
          <div className="hero-tags reveal" style={{ transitionDelay: '.2s' }}>
            {['Software', 'AR / VR', 'Human-Computer Interaction'].map((t, i) => (
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
          <img src={heroSketch} alt="AR/VR sketch" className="hero-svg" />
          
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
