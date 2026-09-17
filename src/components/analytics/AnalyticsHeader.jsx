import { BarChart3, CalendarDays, Download } from "lucide-react";

function AnalyticsHeader() {
  return (
    <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

      <div className="flex items-start gap-3">

        <div className="rounded-xl bg-linear-to-br from-violet-600 via-blue-500 to-cyan-400 p-3 shadow-lg shadow-violet-500/20">
          <BarChart3
            size={23}
            className="text-white"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Analytics
          </h1>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
            Understand your coding activity and progress over time.
          </p>
        </div>

      </div>

      <div className="flex flex-col gap-2 sm:flex-row">

        <div className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2.5 dark:border-slate-700 dark:bg-slate-900">

          <CalendarDays
            size={16}
            className="text-slate-400"
          />

          <select
            defaultValue="30"
            className="bg-transparent text-sm font-medium outline-none dark:text-slate-100"
          >
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
            <option value="365">This year</option>
            <option value="all">All time</option>
          </select>

        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
        >
          <Download size={16} />
          Export
        </button>

      </div>

    </section>
  );
}

export default AnalyticsHeader;