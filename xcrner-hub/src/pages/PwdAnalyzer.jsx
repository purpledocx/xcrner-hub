import { useState } from 'react';

export default function PwdAnalyzer() {
  const [password, setPassword] = useState("");
  const [data, setData] = useState({
    strength: "Waiting...",
    entropy: "0 bits",
    progress: 0,
    color: "#a855f7",
    suggestions: ["Start typing to see suggestions..."]
  });

  const handlePasswordChange = async (e) => {
    const val = e.target.value;
    setPassword(val);

    if (!val) {
      setData({
        strength: "Waiting...",
        entropy: "0 bits",
        progress: 0,
        color: "#a855f7",
        suggestions: ["Start typing to see suggestions..."]
      });
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/analyze', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: val })
      });

      if (response.ok) {
        const result = await response.json();
        setData(result);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <main className="grow flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-2xl p-8 font-mono">
        <h1 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-white">
          Password Analyzer
        </h1>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm text-purple-200 mb-2 uppercase tracking-widest">Password</label>
          <input 
            type="text" 
            id="password" 
            value={password}
            onChange={handlePasswordChange}
            className="w-full bg-purple-950/20 border border-purple-500/30 rounded-lg p-4 text-lg text-white placeholder-white/20 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all shadow-inner" 
            placeholder="Type to analyze..." 
          />
        </div>

        <div className="flex justify-between items-end mb-3">
          <div className="text-sm uppercase tracking-wider text-gray-300">
            Strength: <span className="font-bold text-purple-400">{data.strength}</span>
          </div>
          <div className="text-xs text-gray-400">
            Entropy: <span className="text-white">{data.entropy}</span>
          </div>
        </div>

        <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden mb-6 border border-white/5">
          <div 
            className="h-full transition-all duration-500 ease-out rounded-full" 
            style={{ width: `${data.progress}%`, backgroundColor: data.color }}
          ></div>
        </div>

        <div className="suggestions bg-purple-900/20 border border-purple-500/20 rounded-lg p-4 text-sm text-purple-200/80">
          <ul className="list-disc list-inside space-y-2">
            {data.suggestions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}