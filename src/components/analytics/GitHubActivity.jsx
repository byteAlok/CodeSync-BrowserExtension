import {
  GitCommitHorizontal,
  GitBranch,
  FileCode2,
  TrendingUp,
} from "lucide-react";

import { SiGithub } from "@icons-pack/react-simple-icons";

const stats = [
  {
    title: "Commits",
    value: "86",
    icon: GitCommitHorizontal,
    iconClass: "text-blue-500",
    bgClass: "bg-blue-500/10",
  },
  {
    title: "Branches",
    value: "6",
    icon: GitBranch,
    iconClass: "text-violet-500",
    bgClass: "bg-violet-500/10",
  },
  {
    title: "Files Synced",
    value: "494",
    icon: FileCode2,
    iconClass: "text-emerald-500",
    bgClass: "bg-emerald-500/10",
  },
  {
    title: "Sync Rate",
    value: "98%",
    icon: TrendingUp,
    iconClass: "text-orange-500",
    bgClass: "bg-orange-500/10",
  },
];

function GitHubActivity() {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-6">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-slate-950 p-2.5 dark:bg-white">
          <SiGithub
            size={21}
            className="text-white dark:text-slate-950"
          />
        </div>

        <div>
          <h2 className="font-semibold">
            GitHub Activity
          </h2>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            GitHub synchronization statistics
          </p>
        </div>

      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border border-slate-200 p-4 dark:border-slate-800"
            >

              <div className="flex items-center justify-between">

                <div className={`rounded-lg p-2 ${stat.bgClass}`}>
                  <Icon
                    size={19}
                    className={stat.iconClass}
                  />
                </div>

                <span className="text-lg font-bold">
                  {stat.value}
                </span>

              </div>

              <p className="mt-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                {stat.title}
              </p>

            </div>
          );
        })}

      </div>

      {/* Activity bars */}
      <div className="mt-5 rounded-xl border border-slate-200 p-4 dark:border-slate-800">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-semibold">
              GitHub Sync Activity
            </p>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Recent repository synchronization
            </p>
          </div>

          <span className="text-xs font-medium text-emerald-500">
            98% success
          </span>

        </div>

        <div className="mt-5 flex h-16 items-end gap-1.5 sm:gap-2">

          {[35, 52, 42, 65, 48, 72, 58, 81, 63, 76, 91, 70, 84, 67, 95, 78, 88, 72, 96, 82].map(
            (height, index) => (
              <div
                key={index}
                className="group flex h-full flex-1 items-end"
              >
                <div
                  className="w-full rounded-t-sm bg-linear-to-t from-violet-600 to-cyan-400 opacity-75 transition hover:opacity-100"
                  style={{
                    height: `${height}%`,
                  }}
                />
              </div>
            )
          )}

        </div>

      </div>

    </article>
  );
}

export default GitHubActivity;