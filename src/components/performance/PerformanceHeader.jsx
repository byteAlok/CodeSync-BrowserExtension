import { Activity, Download } from "lucide-react";

function PerformanceHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-fuchsia-500 to-violet-600 text-white shadow-lg shadow-fuchsia-500/20">
          <Activity size={22} />
        </div>

        <div className="min-w-0">
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
            Performance
          </h1>

          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
            Understand your coding performance and consistency
          </p>
        </div>
      </div>

      <button
        type="button"
        className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
      >
        <Download size={16} />
        Export Report
      </button>
    </div>
  );
}

export default PerformanceHeader;