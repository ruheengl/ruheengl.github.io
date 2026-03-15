import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import Footer from '../components/Footer';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) navigate('/work');
  }, [id]);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('on'); }),
      { threshold:.06 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [id]);

  if (!project) return null;
  const idx = PROJECTS.findIndex(p => p.id === id);
  const prev = PROJECTS[idx-1];
  const next = PROJECTS[idx+1];

  return (
    <div className="detail page-enter">
      <div className="detail-back reveal">
        <Link to="/work" className="back-link">← All projects</Link>
      </div>

      <header className="detail-header">
        <p className="detail-cat reveal">{project.category}</p>
        <h1 className="reveal" style={{ transitionDelay:'.06s' }}>{project.title}</h1>
        <div className="detail-meta reveal" style={{ transitionDelay:'.1s' }}>
          <span className="meta-item"><span className="meta-label">Year</span>{project.year}</span>
          {project.collaborators && <span className="meta-item"><span className="meta-label">With</span>{project.collaborators}</span>}
          <span className="meta-item"><span className="meta-label">Role</span>{project.role}</span>
        </div>
      </header>

      {(project.youtubeId || project.image) && (
        <section className="detail-demo reveal" style={{ transitionDelay: '.14s' }}>
          {project.youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}`}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                background: '#f5f0e8',
                padding: '16px',
              }}
            />
          )}
        </section>
      )}

      <div className="detail-body">
        <section className="detail-text reveal">
          <h2 className="detail-section-title">About the project</h2>
          {project.description.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
        </section>

        <aside className="detail-sidebar reveal" style={{ transitionDelay:'.08s' }}>
          <div>
            <h3 className="sidebar-label">Tech stack</h3>
            <div className="sidebar-pills">
              {project.techs.map(t => <span key={t} className="pill">{t}</span>)}
            </div>
          </div>
          {project.links.length > 0 && (
            <div>
              <h3 className="sidebar-label">Links</h3>
              <div className="sidebar-links">
                {project.links.map(l => <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="sidebar-link">{l.label} →</a>)}
              </div>
            </div>
          )}
          {/* <div className="detail-sticky">
            <div className="sticky-label">My role</div>
            <p>{project.role}</p>
          </div> */}
        </aside>
      </div>

      <nav className="detail-nav reveal">
        {prev ? (
          <Link to={`/work/${prev.id}`} className="dnav-link dnav-prev">
            <span className="dnav-dir">← Previous</span>
            <span className="dnav-name">{prev.title}</span>
          </Link>
        ) : <div/>}
        {next ? (
          <Link to={`/work/${next.id}`} className="dnav-link dnav-next">
            <span className="dnav-dir">Next →</span>
            <span className="dnav-name">{next.title}</span>
          </Link>
        ) : <div/>}
      </nav>
      <Footer />
    </div>
  );
}
