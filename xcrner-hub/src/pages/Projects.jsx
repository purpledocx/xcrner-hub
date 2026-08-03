import { Link } from "react-router-dom";
import { ShieldAlert } from "lucide-react";

const PROJECTS = [
  {
    id: "password-analyzer",
    title: "Password Strength Analyzer",
    description:
      "Analyze password strength, entropy and receive recommendations for stronger passwords.",
    path: "/analyzer",
    active: true,
  },
];

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-10 text-white">
      <header className="mb-10 text-center">
        <p className="mb-2 text-xs uppercase tracking-[0.35em] text-purple-300/70">
          Curated Work
        </p>

        <h1 className="font-mono text-4xl font-bold text-purple-300">
          My Projects
        </h1>
      </header>

      <div className="grid w-full max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {PROJECTS.map((project) => (
          <article
            className="
              group flex h-72 w-72 flex-col 
              rounded-3xl 
              border border-white/10 
              bg-linear-to-br from-[#1b1028]/80 via-[#120a1d]/70 to-black/50
              p-6 
              shadow-xl 
              transition-all duration-300
              hover:-translate-y-2
              hover:border-purple-500
              hover:shadow-2xl
            "
          >
            <div className="mb-5 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/20">
                  <ShieldAlert className="h-6 w-6 text-red-500" />
                </div>

                <h2 className="text-lg font-bold leading-tight">
                  {project.title}
                </h2>
              </div>

              <span
                className={`rounded-full border px-3 py-1 text-xs font-bold uppercase ${
                  project.active
                    ? "border-red-500 bg-red-500 text-white"
                    : "border-zinc-700 bg-zinc-800 text-zinc-400"
                }`}
              >
                {project.active ? "LIVE" : "DRAFT"}
              </span>
            </div>

            <p className="flex-1 text-sm leading-6 text-slate-300">
              {project.description}
            </p>

            <Link
              to={project.path}
              className="
                mt-6 flex h-12 w-full items-center justify-center rounded-xl 
                bg-red-500 text-white font-semibold
                transition-all duration-300 
                hover:bg-purple-600 hover:scale-105 
                active:scale-95
                "
            >
            Open
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}