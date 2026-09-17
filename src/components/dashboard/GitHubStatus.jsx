import {
  ExternalLink,
  GitBranch,
  GitCommitHorizontal,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";

import { SiGithub } from "@icons-pack/react-simple-icons";

function GitHubStatus() {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 xl:col-span-1">

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-slate-100 p-2.5 dark:bg-slate-950">
            <SiGithub
              size={22}
              className="text-slate-950 dark:text-slate-100"
            />
          </div>

          <div>
            <h2 className="font-semibold">GitHub Status</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Account connection
            </p>
          </div>
        </div>

        <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-500">
          <CheckCircle2 size={13} />
          Connected
        </span>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-violet-600 text-sm font-bold text-white">
          A
        </div>

        <div>
          <p className="font-semibold">@AlokSDE</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            GitHub Account
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 divide-x divide-slate-200 rounded-xl border border-slate-200 dark:divide-slate-800 dark:border-slate-800">

        <div className="p-3 text-center">
          <GitBranch
            size={18}
            className="mx-auto text-violet-500"
          />
          <p className="mt-1 text-lg font-bold">3</p>
          <p className="text-xs text-slate-500">Repos</p>
        </div>

        <div className="p-3 text-center">
          <GitCommitHorizontal
            size={18}
            className="mx-auto text-blue-500"
          />
          <p className="mt-1 text-lg font-bold">247</p>
          <p className="text-xs text-slate-500">Commits</p>
        </div>

        <div className="p-3 text-center">
          <RefreshCw
            size={18}
            className="mx-auto text-emerald-500"
          />
          <p className="mt-1 text-lg font-bold">98%</p>
          <p className="text-xs text-slate-500">Synced</p>
        </div>

      </div>

      <button
        type="button"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
      >
        Open GitHub
        <ExternalLink size={16} />
      </button>

    </article>
  );
}

export default GitHubStatus;