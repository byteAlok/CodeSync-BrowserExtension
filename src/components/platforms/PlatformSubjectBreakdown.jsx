import { useState } from "react";
import {
  BarChart3,
  ChevronDown,
  Layers3,
  Hash,
} from "lucide-react";

function PlatformSubjectBreakdown() {
  const [platform, setPlatform] = useState("LeetCode");

  const platformData = {
    LeetCode: [
      { subject: "Arrays", easy: 32, medium: 21, hard: 4 },
      { subject: "Strings", easy: 18, medium: 14, hard: 3 },
      { subject: "Linked List", easy: 9, medium: 8, hard: 2 },
      { subject: "Trees", easy: 12, medium: 17, hard: 8 },
      { subject: "Graphs", easy: 5, medium: 11, hard: 7 },
      { subject: "Dynamic Programming", easy: 3, medium: 9, hard: 8 },
      { subject: "Stack / Queue", easy: 8, medium: 6, hard: 1 },
      { subject: "Binary Search", easy: 7, medium: 5, hard: 1 },
    ],

    HackerRank: [
      { subject: "Arrays", easy: 14, medium: 9, hard: 2 },
      { subject: "Strings", easy: 10, medium: 7, hard: 1 },
      { subject: "Linked List", easy: 5, medium: 4, hard: 1 },
      { subject: "Trees", easy: 4, medium: 6, hard: 2 },
      { subject: "Graphs", easy: 2, medium: 3, hard: 2 },
      { subject: "Dynamic Programming", easy: 2, medium: 2, hard: 2 },
      { subject: "Stack / Queue", easy: 3, medium: 1, hard: 1 },
      { subject: "Sorting", easy: 2, medium: 3, hard: 0 },
    ],

    GeeksforGeeks: [
      { subject: "Arrays", easy: 8, medium: 6, hard: 1 },
      { subject: "Strings", easy: 4, medium: 3, hard: 1 },
      { subject: "Linked List", easy: 2, medium: 2, hard: 0 },
      { subject: "Trees", easy: 3, medium: 3, hard: 2 },
      { subject: "Graphs", easy: 1, medium: 2, hard: 1 },
      { subject: "Dynamic Programming", easy: 1, medium: 2, hard: 1 },
      { subject: "Stack / Queue", easy: 1, medium: 1, hard: 0 },
      { subject: "Searching", easy: 2, medium: 1, hard: 0 },
    ],
  };

  const subjects = platformData[platform];

  const getTotal = (item) =>
    item.easy + item.medium + item.hard;

  const totalEasy = subjects.reduce(
    (sum, item) => sum + item.easy,
    0
  );

  const totalMedium = subjects.reduce(
    (sum, item) => sum + item.medium,
    0
  );

  const totalHard = subjects.reduce(
    (sum, item) => sum + item.hard,
    0
  );

  const totalSolved =
    totalEasy + totalMedium + totalHard;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400">
            <BarChart3 size={20} />
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              Subject-wise Breakdown
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Problems solved by subject and difficulty
            </p>
          </div>
        </div>

        {/* Platform Selector */}
        <div className="relative w-full sm:w-44">
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 pr-9 text-sm font-medium text-slate-700 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
          >
            <option value="LeetCode">LeetCode</option>
            <option value="HackerRank">HackerRank</option>
            <option value="GeeksforGeeks">
              GeeksforGeeks
            </option>
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400"
          />
        </div>
      </div>

      {/* Summary */}
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-950">
          <div className="flex items-center gap-2">
            <Layers3 size={15} className="text-violet-500" />

            <span className="text-xs text-slate-500 dark:text-slate-400">
              Total
            </span>
          </div>

          <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
            {totalSolved}
          </p>
        </div>

        <div className="rounded-xl bg-emerald-50 p-3 dark:bg-emerald-500/10">
          <p className="text-xs text-emerald-600 dark:text-emerald-400">
            Easy
          </p>

          <p className="mt-1 text-lg font-bold text-emerald-700 dark:text-emerald-300">
            {totalEasy}
          </p>
        </div>

        <div className="rounded-xl bg-amber-50 p-3 dark:bg-amber-500/10">
          <p className="text-xs text-amber-600 dark:text-amber-400">
            Medium
          </p>

          <p className="mt-1 text-lg font-bold text-amber-700 dark:text-amber-300">
            {totalMedium}
          </p>
        </div>

        <div className="rounded-xl bg-red-50 p-3 dark:bg-red-500/10">
          <p className="text-xs text-red-600 dark:text-red-400">
            Hard
          </p>

          <p className="mt-1 text-lg font-bold text-red-700 dark:text-red-300">
            {totalHard}
          </p>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="mt-5 hidden overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-162.5 text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Subject
                </th>

                <th className="px-4 py-3 text-center text-xs font-semibold text-emerald-500">
                  Easy
                </th>

                <th className="px-4 py-3 text-center text-xs font-semibold text-amber-500">
                  Medium
                </th>

                <th className="px-4 py-3 text-center text-xs font-semibold text-red-500">
                  Hard
                </th>

                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Total
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {subjects.map((item) => (
                <tr
                  key={item.subject}
                  className="transition hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Hash
                        size={15}
                        className="text-slate-400"
                      />

                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {item.subject}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-3 text-center font-semibold text-emerald-600 dark:text-emerald-400">
                    {item.easy}
                  </td>

                  <td className="px-4 py-3 text-center font-semibold text-amber-600 dark:text-amber-400">
                    {item.medium}
                  </td>

                  <td className="px-4 py-3 text-center font-semibold text-red-600 dark:text-red-400">
                    {item.hard}
                  </td>

                  <td className="px-4 py-3 text-right font-bold text-slate-800 dark:text-slate-200">
                    {getTotal(item)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="mt-5 space-y-2 md:hidden">
        {subjects.map((item) => (
          <div
            key={item.subject}
            className="rounded-xl border border-slate-200 p-3 dark:border-slate-800"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-2">
                <Hash
                  size={15}
                  className="shrink-0 text-slate-400"
                />

                <span className="truncate text-sm font-medium text-slate-700 dark:text-slate-300">
                  {item.subject}
                </span>
              </div>

              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                {getTotal(item)}
              </span>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-emerald-50 px-2 py-1.5 text-center dark:bg-emerald-500/10">
                <p className="text-[10px] text-emerald-600 dark:text-emerald-400">
                  Easy
                </p>

                <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
                  {item.easy}
                </p>
              </div>

              <div className="rounded-lg bg-amber-50 px-2 py-1.5 text-center dark:bg-amber-500/10">
                <p className="text-[10px] text-amber-600 dark:text-amber-400">
                  Medium
                </p>

                <p className="text-sm font-bold text-amber-700 dark:text-amber-300">
                  {item.medium}
                </p>
              </div>

              <div className="rounded-lg bg-red-50 px-2 py-1.5 text-center dark:bg-red-500/10">
                <p className="text-[10px] text-red-600 dark:text-red-400">
                  Hard
                </p>

                <p className="text-sm font-bold text-red-700 dark:text-red-300">
                  {item.hard}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlatformSubjectBreakdown;