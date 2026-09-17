import { Activity as ActivityIcon, RefreshCw } from "lucide-react";

function ActivityHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/20">
          <ActivityIcon size={22} />
        </div>

        <div className="min-w-0">
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
            Activity
          </h1>

          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
            Track your coding, synchronization and GitHub activity
          </p>
        </div>
      </div>

      <button
        type="button"
        className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
      >
        <RefreshCw size={16} />
        Refresh
      </button>
    </div>
  );
}

export default ActivityHeader;