import {
  GitBranch,
  GitCommitHorizontal,
  FileCode2,
  ExternalLink,
  MoreHorizontal,
  RefreshCw,
  Lock,
  Globe2,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import { SiGithub } from "@icons-pack/react-simple-icons";

function RepositoryCard({ repository }) {
  const isSynced = repository.status === "Synced";

  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-violet-700">

      {/* Top */}
      <div className="flex items-start justify-between gap-4">

        <div className="flex min-w-0 items-start gap-3">

          <div className="rounded-xl bg-slate-950 p-2.5 dark:bg-white">
            <SiGithub
              size={22}
              className="text-white dark:text-slate-950"
            />
          </div>

          <div className="min-w-0">

            <div className="flex flex-wrap items-center gap-2">

              <button
                type="button"
                className="truncate text-base font-bold transition hover:text-blue-500"
              >
                {repository.name}
              </button>

              {repository.visibility === "Private" ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/10 px-2 py-1 text-[10px] font-medium text-violet-500">
                  <Lock size={10} />
                  Private
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2 py-1 text-[10px] font-medium text-blue-500">
                  <Globe2 size={10} />
                  Public
                </span>
              )}

            </div>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Updated {repository.lastSync}
            </p>

          </div>

        </div>

        <button
          type="button"
          className="shrink-0 rounded-lg p-2 text-slate-500 opacity-100 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          <MoreHorizontal size={18} />
        </button>

      </div>

      {/* Description */}
      <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
        {repository.description}
      </p>

      {/* Topics */}
      <div className="mt-4 flex flex-wrap gap-2">

        {repository.topics.map((topic) => (
          <span
            key={topic}
            className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          >
            #{topic}
          </span>
        ))}

      </div>

      {/* Stats */}
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">

        <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-950">

          <div className="flex items-center gap-1.5 text-slate-400">
            <FileCode2 size={14} />
            <span className="text-[11px]">
              Solutions
            </span>
          </div>

          <p className="mt-1 text-lg font-bold">
            {repository.solutions}
          </p>

        </div>

        <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-950">

          <div className="flex items-center gap-1.5 text-slate-400">
            <GitCommitHorizontal size={14} />
            <span className="text-[11px]">
              Commits
            </span>
          </div>

          <p className="mt-1 text-lg font-bold">
            {repository.commits}
          </p>

        </div>

        <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-950">

          <div className="flex items-center gap-1.5 text-slate-400">
            <GitBranch size={14} />
            <span className="text-[11px]">
              Branch
            </span>
          </div>

          <p className="mt-1 truncate text-sm font-bold">
            {repository.defaultBranch}
          </p>

        </div>

        <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-950">

          <div className="flex items-center gap-1.5 text-slate-400">
            <span className="text-[11px]">
              Size
            </span>
          </div>

          <p className="mt-1 text-sm font-bold">
            {repository.size}
          </p>

        </div>

      </div>

      {/* Sync Status */}
      <div className="mt-4 flex flex-col gap-3 rounded-xl border border-slate-200 p-3 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-2">

          {isSynced ? (
            <>
              <div className="rounded-full bg-emerald-500/10 p-1.5">
                <CheckCircle2
                  size={15}
                  className="text-emerald-500"
                />
              </div>

              <div>
                <p className="text-xs font-semibold text-emerald-500">
                  Synced
                </p>

                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  All changes are up to date
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="rounded-full bg-orange-500/10 p-1.5">
                <Clock3
                  size={15}
                  className="text-orange-500"
                />
              </div>

              <div>
                <p className="text-xs font-semibold text-orange-500">
                  Syncing
                </p>

                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Synchronization in progress
                </p>
              </div>
            </>
          )}

        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          <RefreshCw
            size={13}
            className={isSynced ? "" : "animate-spin"}
          />
          Sync Now
        </button>

      </div>

      {/* Actions */}
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">

        <button
          type="button"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:shadow-lg hover:shadow-violet-500/20"
        >
          Open Repository
          <ExternalLink size={14} />
        </button>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-xs font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          Manage
        </button>

      </div>

    </article>
  );
}

export default RepositoryCard;