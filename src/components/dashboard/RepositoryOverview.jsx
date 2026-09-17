import {
  ArrowUpRight,
  GitFork,
  Lock,
  FolderGit2,
} from "lucide-react";

const repositories = [
  {
    name: "CodeSync-Algorithms",
    visibility: "Private",
    solutions: 247,
    platforms: 3,
    lastSync: "2 min ago",
  },
  {
    name: "DSA-Solutions",
    visibility: "Public",
    solutions: 84,
    platforms: 2,
    lastSync: "18 min ago",
  },
  {
    name: "Coding-Practice",
    visibility: "Public",
    solutions: 42,
    platforms: 1,
    lastSync: "1 hour ago",
  },
];

function RepositoryOverview() {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
      
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold">Repository Overview</h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Your connected GitHub repositories
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="mt-5 space-y-3">
        {repositories.map((repo) => (
          <div
            key={repo.name}
            className="rounded-xl border border-slate-200 p-4 transition hover:border-violet-400/50 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
          >
            <div className="flex items-start justify-between gap-3">
              
              <div className="flex min-w-0 items-center gap-3">
                <div className="rounded-lg bg-violet-500/10 p-2">
                  <FolderGit2
                    size={20}
                    className="text-violet-500"
                  />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">
                    {repo.name}
                  </p>

                  <div className="mt-1 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    {repo.visibility === "Private" ? (
                      <Lock size={12} />
                    ) : (
                      <GitFork size={12} />
                    )}

                    <span>{repo.visibility}</span>
                  </div>
                </div>

              </div>

              <span className="shrink-0 rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] font-medium text-emerald-500">
                Synced
              </span>

            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3">
              <div>
                <p className="text-slate-500 dark:text-slate-400">
                  Solutions
                </p>
                <p className="mt-1 font-semibold">
                  {repo.solutions}
                </p>
              </div>

              <div>
                <p className="text-slate-500 dark:text-slate-400">
                  Platforms
                </p>
                <p className="mt-1 font-semibold">
                  {repo.platforms}
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="text-slate-500 dark:text-slate-400">
                  Last Sync
                </p>
                <p className="mt-1 font-semibold">
                  {repo.lastSync}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </article>
  );
}

export default RepositoryOverview;