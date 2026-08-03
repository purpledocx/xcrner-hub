export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-purple-900/40 via-purple-950/30 to-black/50 backdrop-blur-xl border-t border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] text-white p-4 mt-auto">
      <nav className="flex justify-evenly font-mono text-white text-xl">
        <a href="https://github.com/purpledocx" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">
          github.com/purpledocx
        </a>
      </nav>
    </footer>
  );
}