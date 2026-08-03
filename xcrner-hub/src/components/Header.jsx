import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-linear-to-r from-purple-900/40 via-purple-950/30 to-black/50 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] text-white p-4">
      <nav className="flex justify-evenly font-mono text-white text-3xl">
        <Link to="/stuff" className="hover:text-purple-300 transition-colors">stuff</Link>
        <Link 
          to="/" 
          className="hover:text-purple-300 transition-colors"
          style={location.pathname === '/' ? { textShadow: '0 0 20px rgba(212,0,255,0.95), 0 0 35px rgba(0,191,255,0.65)' } : {}}
        >
          xcrner-hub
        </Link>
        <Link to="/projects" className="hover:text-purple-300 transition-colors">projects</Link>
        <Link to="/analyzer" className="hover:text-purple-300 transition-colors">analyzer</Link>
      </nav>
    </header>
  );
}