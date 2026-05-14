import Link from "next/link";

const links = [
  {
    href: "/astronomy",
    icon: "🔭",
    title: "Astronomy Picture",
    description: "NASA's picture of the day with caption",
    tag: "Server Side",
  },
  {
    href: "/rover",

    title: "Mars Rover Photos",
    description: "Live photos from the Curiosity rover on Mars",
    tag: "Client Side",
  },
  {
    href: "/blogs",
    icon: "📝",
    title: "Blog Posts",
    description: "Dynamic routes to different blog posts",
    tag: "Dynamic Routes",
  },
  {
    href: "/epic?date=2021-01-01",
    icon: "🌍",
    title: "NASA EPIC Image",
    description: "Earth imagery based on query string date",
    tag: "Query Params",
  },
  {
    href: "/articles-server",
    icon: "⚡",
    title: "Articles — Server",
    description: "10 articles rendered on the server",
    tag: "SSR",
  },
  {
    href: "/articles-client",
    icon: "💻",
    title: "Articles — Client",
    description: "10 articles rendered on the client",
    tag: "CSR",
  },
];

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap');
 
        * { margin: 0; padding: 0; box-sizing: border-box; }
 
        body {
          background: #020408;
          color: #e8eaf0;
          font-family: 'Syne', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }
 
        .stars {
          position: fixed;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 30% 60%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 50% 10%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 80%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 90% 40%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 20% 90%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 60% 50%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 80% 15%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 45% 70%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 15% 45%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(2px 2px at 25% 35%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(2px 2px at 75% 65%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(2px 2px at 55% 25%, rgba(200,220,255,0.4) 0%, transparent 100%),
            radial-gradient(2px 2px at 85% 55%, rgba(200,220,255,0.3) 0%, transparent 100%);
        }
 
        .glow {
          position: fixed;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56, 100, 255, 0.06) 0%, transparent 70%);
          top: -200px;
          left: -100px;
          z-index: 0;
          pointer-events: none;
        }
 
        .glow-2 {
          position: fixed;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(100, 56, 255, 0.05) 0%, transparent 70%);
          bottom: -100px;
          right: -50px;
          z-index: 0;
          pointer-events: none;
        }
 
        .container {
          position: relative;
          z-index: 1;
          max-width: 960px;
          margin: 0 auto;
          padding: 0 2rem;
        }
 
        .hero {
          padding: 7rem 0 5rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
 
        .tag {
          display: inline-block;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: rgba(100, 160, 255, 0.8);
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          padding: 6px 14px;
          border: 1px solid rgba(100, 160, 255, 0.2);
          border-radius: 100px;
        }
 
        h1 {
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }
 
        h1 span {
          color: rgba(255,255,255,0.25);
        }
 
        .hero p {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.45);
          max-width: 480px;
          line-height: 1.7;
          font-weight: 400;
        }
 
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1px;
          margin: 4rem 0;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
        }
 
        .card {
          display: block;
          padding: 2rem;
          background: rgba(5, 10, 20, 0.8);
          text-decoration: none;
          color: inherit;
          transition: background 0.2s;
          border: none;
          position: relative;
        }
 
        .card:hover {
          background: rgba(255,255,255,0.04);
        }
 
        .card-icon {
          font-size: 1.8rem;
          margin-bottom: 1.2rem;
          display: block;
        }
 
        .card-tag {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(100, 160, 255, 0.6);
          margin-bottom: 0.6rem;
          display: block;
        }
 
        .card h2 {
          font-size: 1rem;
          font-weight: 700;
          color: rgba(255,255,255,0.9);
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }
 
        .card p {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.35);
          line-height: 1.6;
          font-weight: 400;
        }
 
        .card-arrow {
          position: absolute;
          top: 2rem;
          right: 2rem;
          color: rgba(255,255,255,0.15);
          font-size: 1.2rem;
          transition: color 0.2s, transform 0.2s;
        }
 
        .card:hover .card-arrow {
          color: rgba(255,255,255,0.5);
          transform: translate(2px, -2px);
        }
 
        footer {
          padding: 2rem 0 4rem;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.05em;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
      `}</style>

      <div className="stars" />
      <div className="glow" />
      <div className="glow-2" />

      <div className="container">
        <header className="hero">
          <span className="tag">Week 5 — Next.js</span>
          <h1>
            Space
            <br />
            <span>Galactica</span>
          </h1>
          <p>
            Exploring server-side rendering, client-side data fetching, dynamic
            routing, and performance with NASA APIs.
          </p>
        </header>

        <nav className="grid">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="card">
              <span className="card-icon">{link.icon}</span>
              <span className="card-tag">{link.tag}</span>
              <h2>{link.title}</h2>
              <p>{link.description}</p>
              <span className="card-arrow">↗</span>
            </Link>
          ))}
        </nav>

        <footer>Space Galactica · Next.js {new Date().getFullYear()}</footer>
      </div>
    </>
  );
}
