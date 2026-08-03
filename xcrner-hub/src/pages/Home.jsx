export default function Home() {
  return (
    <main className="flex-1 flex flex-col justify-center items-center gap-6 py-12 text-center w-full">
      <h1 className="text-white font-mono text-6xl" style={{ textShadow: '0 0 30px rgba(148,0,255,0.95), 0 0 45px rgba(0,191,255,0.55)' }}>
        purpledocx
      </h1>
      <video 
        src="/img/ducky.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-140 max-w-full h-auto block rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.25)]" 
      />
      <h1 style={{ maxWidth: '30rem', color: '#fff', fontSize: '1.5rem', lineHeight: '1.4' }}>
        XCRNER hub - webpage dedicated to store <dfn>developed</dfn>/<cite><abbr title="lost inerest / ssd archive">archived</abbr></cite> projects
      </h1>
    </main>
  );
}