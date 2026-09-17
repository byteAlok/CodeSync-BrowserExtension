import { useState } from "react";
import { Search, ChevronDown, RotateCcw } from "lucide-react";

function ActivityFilters() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [platform, setPlatform] = useState("all");
  const [date, setDate] = useState("all");

  const resetFilters = () => {
    setSearch("");
    setType("all");
    setPlatform("all");
    setDate("all");
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[minmax(220px,1fr)_180px_180px_160px_auto]">
        {/* Search */}
        <div className="relative">
          <Search
            size={17}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search activity..."
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
          />
        </div>

        {/* Activity Type */}
        <div className="relative">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 pr-9 text-sm text-slate-700 outline-none transition focus:border-violet-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
          >
            <option value="all">All Activity</option>
            <option value="solution">Solutions</option>
            <option value="sync">Sync</option>
            <option value="commit">Commits</option>
            <option value="repository">Repositories</option>
            <option value="error">Errors</option>
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
          />
        </div>

        {/* Platform */}
        <div className="relative">
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 pr-9 text-sm text-slate-700 outline-none transition focus:border-violet-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
          >
            <option value="all">All Platforms</option>
            <option value="leetcode">LeetCode</option>
            <option value="hackerrank">HackerRank</option>
            <option value="gfg">GeeksforGeeks</option>
            <option value="github">GitHub</option>
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
          />
        </div>

        {/* Date */}
        <div className="relative">
          <select
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 pr-9 text-sm text-slate-700 outline-none transition focus:border-violet-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
          />
        </div>

        {/* Reset */}
        <button
          type="button"
          onClick={resetFilters}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400 dark:hover:bg-slate-800"
        >
          <RotateCcw size={15} />
          Reset
        </button>
      </div>
    </section>
  );
}

export default ActivityFilters;