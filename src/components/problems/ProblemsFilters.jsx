import {
  Search,
  SlidersHorizontal,
  RotateCcw,
} from "lucide-react";

function ProblemsFilters() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-5">

      <div className="flex flex-col gap-3 xl:flex-row xl:items-center">

        {/* Search */}
        <div className="relative min-w-0 flex-1">

          <Search
            size={18}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search problems..."
            className="w-full rounded-xl border border-slate-300 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
          />

        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 xl:flex">

          <div className="relative">
            <SlidersHorizontal
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
              defaultValue="all"
              className="w-full appearance-none rounded-xl border border-slate-300 bg-slate-50 py-2.5 pl-9 pr-9 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 sm:min-w-40"
            >
              <option value="all">All Platforms</option>
              <option value="leetcode">LeetCode</option>
              <option value="hackerrank">HackerRank</option>
              <option value="gfg">GeeksforGeeks</option>
            </select>
          </div>

          <select
            defaultValue="all"
            className="appearance-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 sm:min-w-36"
          >
            <option value="all">All Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <select
            defaultValue="all"
            className="appearance-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 sm:min-w-36"
          >
            <option value="all">All Status</option>
            <option value="synced">Synced</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>

        </div>

        {/* Reset */}
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          <RotateCcw size={16} />
          Reset
        </button>

      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <span>
          Showing 247 problems
        </span>

        <span>•</span>

        <span>
          Last synced 2 minutes ago
        </span>
      </div>

    </section>
  );
}

export default ProblemsFilters;