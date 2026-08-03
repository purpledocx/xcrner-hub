export default function Stuff() {
  return (
    <main className="grow flex items-center justify-center p-6">
      <div className="rounded-2xl overflow-hidden shadow-2xl w-max border border-white/10">
        <iframe 
          src="https://goblin.tools/" 
          width="500" 
          height="300" 
          className="h-96 border-none"
          title="Goblin Tools"
        ></iframe>
      </div>
    </main>
  );
}