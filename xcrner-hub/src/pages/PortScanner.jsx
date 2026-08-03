import { useRef, useState } from "react";

export default function PortScanner() {
  const [host, setHost] = useState("127.0.0.1");
  const [startPort, setStartPort] = useState(1);
  const [endPort, setEndPort] = useState(100);
  const [results, setResults] = useState([]);
  const [isScanning, setIsScanning] = useState(false);
  const [onlyOpen, setOnlyOpen] = useState(false);
  const socketRef = useRef(null);

  const filteredResults = onlyOpen
    ? results.filter((item) => item.status === "open")
    : results;

  const openCount = results.filter((item) => item.status === "open").length;
  const totalTarget = Math.max(0, Number(endPort) - Number(startPort) + 1);
  const progressPercent =
    totalTarget > 0
      ? Math.min(100, Math.round((results.length / totalTarget) * 100))
      : 0;

  const startScan = () => {
    if (isScanning) {
      socketRef.current?.close();
      setIsScanning(false);
      return;
    }

    setIsScanning(true);
    setResults([]);

    const ws = new WebSocket("ws://127.0.0.1:8000/ws/scan");
    socketRef.current = ws;

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          host,
          start: Number(startPort),
          end: Number(endPort),
        }),
      );
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.status === "completed") {
        setIsScanning(false);
        ws.close();
        return;
      }

      setResults((prev) => [...prev, data]);
    };

    ws.onclose = () => {
      setIsScanning(false);
    };
  };

  return (
    <main className="grow flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-2xl p-8 font-mono">
        <h1 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-linear-to-r from-purple-300 to-white">
          Live Port Scanner
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="sm:col-span-1">
            <label htmlFor="host" className="block text-xs text-purple-200 mb-2 uppercase tracking-widest">
              Host IP
            </label>
            <input
              type="text"
              id="host"
              disabled={isScanning}
              value={host}
              onChange={(e) => setHost(e.target.value)}
              className="w-full bg-purple-950/20 border border-purple-500/30 rounded-lg p-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-purple-400 disabled:opacity-50 transition-all shadow-inner"
              placeholder="127.0.0.1"
            />
          </div>

          <div>
            <label htmlFor="startPort" className="block text-xs text-purple-200 mb-2 uppercase tracking-widest">
              Start Port
            </label>
            <input
              type="number"
              id="startPort"
              disabled={isScanning}
              value={startPort}
              onChange={(e) => setStartPort(e.target.value)}
              className="w-full bg-purple-950/20 border border-purple-500/30 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-purple-400 disabled:opacity-50 transition-all shadow-inner"
            />
          </div>

          <div>
            <label htmlFor="endPort" className="block text-xs text-purple-200 mb-2 uppercase tracking-widest">
              End Port
            </label>
            <input
              type="number"
              id="endPort"
              disabled={isScanning}
              value={endPort}
              onChange={(e) => setEndPort(e.target.value)}
              className="w-full bg-purple-950/20 border border-purple-500/30 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-purple-400 disabled:opacity-50 transition-all shadow-inner"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <button
            onClick={startScan}
            className={`px-6 py-3 rounded-lg text-sm uppercase tracking-wider font-bold transition-all shadow-lg cursor-pointer ${
              isScanning
                ? "bg-rose-500/20 border border-rose-500/40 text-rose-300 hover:bg-rose-500/30"
                : "bg-purple-600/30 border border-purple-400/40 text-purple-200 hover:bg-purple-600/50 hover:text-white"
            }`}
          >
            {isScanning ? "Stop Scan" : "Start Scan"}
          </button>

          <label className="flex items-center gap-2 text-xs text-purple-200/80 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={onlyOpen}
              onChange={(e) => setOnlyOpen(e.target.checked)}
              className="rounded bg-purple-950/50 border-purple-500/30 text-purple-500 focus:ring-0"
            />
            Show Open Ports Only
          </label>
        </div>

        <div className="flex justify-between items-end mb-2 text-xs">
          <span className="text-gray-300 uppercase tracking-wider">
            Scanned: <span className="text-purple-400 font-bold">{results.length}</span> / {totalTarget}
          </span>
          <span className="text-emerald-400 font-bold">
            Open Ports: {openCount}
          </span>
        </div>

        <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden mb-6 border border-white/5">
          <div
            className="h-full bg-purple-500 transition-all duration-200 ease-out rounded-full"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <div className="bg-purple-900/10 border border-purple-500/20 rounded-lg p-4 max-h-64 overflow-y-auto space-y-2">
          {filteredResults.length === 0 ? (
            <div className="text-center text-xs text-purple-200/50 py-4">
              {isScanning ? "Scanning ports..." : "Click 'Start Scan' to launch"}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {filteredResults.map((item) => (
                <div
                  key={item.port}
                  className={`flex justify-between items-center p-2 rounded border text-xs ${
                    item.status === "open"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                      : "bg-red-500/5 border-white/5 text-gray-500"
                  }`}
                >
                  <span>Port {item.port}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      item.status === "open"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-red-500/10 text-red-400/60"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

