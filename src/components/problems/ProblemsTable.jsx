import {
  CheckCircle2,
  Clock3,
  ExternalLink,
  MoreHorizontal,
} from "lucide-react";

import {
  SiLeetcode,
  SiHackerrank,
  SiGeeksforgeeks,
} from "@icons-pack/react-simple-icons";

const problems = [
  {
    id: 1,
    title: "Two Sum",
    platform: "LeetCode",
    difficulty: "Easy",
    language: "C#",
    date: "Today",
    status: "Synced",
    icon: SiLeetcode,
    iconColor: "#FFA116",
  },
  {
    id: 2,
    title: "Binary Tree Traversal",
    platform: "GeeksforGeeks",
    difficulty: "Medium",
    language: "C#",
    date: "Today",
    status: "Synced",
    icon: SiGeeksforgeeks,
    iconColor: "#2F8D46",
  },
  {
    id: 3,
    title: "Array Manipulation",
    platform: "HackerRank",
    difficulty: "Hard",
    language: "C#",
    date: "Yesterday",
    status: "Pending",
    icon: SiHackerrank,
    iconColor: "#00EA64",
  },
  {
    id: 4,
    title: "Valid Parentheses",
    platform: "LeetCode",
    difficulty: "Easy",
    language: "C#",
    date: "Yesterday",
    status: "Synced",
    icon: SiLeetcode,
    iconColor: "#FFA116",
  },
  {
    id: 5,
    title: "LRU Cache",
    platform: "LeetCode",
    difficulty: "Hard",
    language: "C#",
    date: "2 days ago",
    status: "Synced",
    icon: SiLeetcode,
    iconColor: "#FFA116",
  },
  {
    id: 6,
    title: "Graph BFS Traversal",
    platform: "GeeksforGeeks",
    difficulty: "Medium",
    language: "C#",
    date: "3 days ago",
    status: "Failed",
    icon: SiGeeksforgeeks,
    iconColor: "#2F8D46",
  },
  {
    id: 7,
    title: "Balanced Brackets",
    platform: "HackerRank",
    difficulty: "Medium",
    language: "C#",
    date: "4 days ago",
    status: "Synced",
    icon: SiHackerrank,
    iconColor: "#00EA64",
  },
];

const difficultyStyles = {
  Easy: "bg-emerald-500/10 text-emerald-500",
  Medium: "bg-orange-500/10 text-orange-500",
  Hard: "bg-rose-500/10 text-rose-500",
};

function StatusBadge({ status }) {
  if (status === "Synced") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-500">
        <CheckCircle2 size={15} />
        Synced
      </span>
    );
  }

  if (status === "Pending") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-500">
        <Clock3 size={15} />
        Pending
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-rose-500">
      <span className="h-2 w-2 rounded-full bg-rose-500" />
      Failed
    </span>
  );
}

function ProblemsTable() {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">

      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">

        <div>
          <h2 className="font-semibold">
            All Problems
          </h2>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Your complete coding problem collection
          </p>
        </div>

        <div className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          247 Problems
        </div>

      </div>

      {/* Desktop / Tablet table */}
      <div className="hidden overflow-x-auto md:block">

        <table className="w-full min-w-212.5">

          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-left dark:border-slate-800 dark:bg-slate-950/50">

              <th className="px-5 py-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                Problem
              </th>

              <th className="px-5 py-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                Platform
              </th>

              <th className="px-5 py-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                Difficulty
              </th>

              <th className="px-5 py-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                Language
              </th>

              <th className="px-5 py-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                Solved
              </th>

              <th className="px-5 py-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                GitHub
              </th>

              <th className="px-5 py-3 text-right text-xs font-medium text-slate-500 dark:text-slate-400">
                Action
              </th>

            </tr>
          </thead>

          <tbody>

            {problems.map((problem) => {
              const Icon = problem.icon;

              return (
                <tr
                  key={problem.id}
                  className="border-b border-slate-100 transition hover:bg-slate-50 dark:border-slate-800/70 dark:hover:bg-slate-800/40"
                >

                  {/* Problem */}
                  <td className="px-5 py-4">
                    <button
                      type="button"
                      className="text-left text-sm font-semibold transition hover:text-blue-500"
                    >
                      {problem.title}
                    </button>

                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      #{problem.id.toString().padStart(4, "0")}
                    </p>
                  </td>

                  {/* Platform */}
                  <td className="px-5 py-4">

                    <div className="flex items-center gap-2 text-sm">

                      <Icon
                        size={18}
                        color={problem.iconColor}
                      />

                      <span>
                        {problem.platform}
                      </span>

                    </div>

                  </td>

                  {/* Difficulty */}
                  <td className="px-5 py-4">

                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${difficultyStyles[problem.difficulty]}`}
                    >
                      {problem.difficulty}
                    </span>

                  </td>

                  {/* Language */}
                  <td className="px-5 py-4">

                    <span className="rounded-lg bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-500">
                      {problem.language}
                    </span>

                  </td>

                  {/* Date */}
                  <td className="px-5 py-4 text-sm text-slate-500 dark:text-slate-400">
                    {problem.date}
                  </td>

                  {/* GitHub */}
                  <td className="px-5 py-4">
                    <StatusBadge status={problem.status} />
                  </td>

                  {/* Action */}
                  <td className="px-5 py-4 text-right">

                    <button
                      type="button"
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                      title="Open problem"
                    >
                      <ExternalLink size={17} />
                    </button>

                    <button
                      type="button"
                      className="ml-1 rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                      title="More options"
                    >
                      <MoreHorizontal size={17} />
                    </button>

                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

      {/* Mobile cards */}
      <div className="divide-y divide-slate-200 md:hidden dark:divide-slate-800">

        {problems.map((problem) => {
          const Icon = problem.icon;

          return (
            <article
              key={problem.id}
              className="p-4 transition hover:bg-slate-50 dark:hover:bg-slate-800/40"
            >

              <div className="flex items-start justify-between gap-3">

                <div className="flex min-w-0 items-center gap-3">

                  <div className="rounded-xl bg-slate-100 p-2.5 dark:bg-slate-800">

                    <Icon
                      size={19}
                      color={problem.iconColor}
                    />

                  </div>

                  <div className="min-w-0">

                    <button
                      type="button"
                      className="block max-w-full truncate text-sm font-semibold hover:text-blue-500"
                    >
                      {problem.title}
                    </button>

                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {problem.platform}
                    </p>

                  </div>

                </div>

                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${difficultyStyles[problem.difficulty]}`}
                >
                  {problem.difficulty}
                </span>

              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">

                <div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Language
                  </p>

                  <p className="mt-1 text-xs font-semibold">
                    {problem.language}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Solved
                  </p>

                  <p className="mt-1 text-xs font-semibold">
                    {problem.date}
                  </p>
                </div>

              </div>

              <div className="mt-4 flex items-center justify-between">

                <StatusBadge status={problem.status} />

                <div className="flex items-center gap-1">

                  <button
                    type="button"
                    className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                  >
                    <ExternalLink size={16} />
                  </button>

                  <button
                    type="button"
                    className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                  >
                    <MoreHorizontal size={16} />
                  </button>

                </div>

              </div>

            </article>
          );
        })}

      </div>

      {/* Pagination */}
      <div className="flex flex-col gap-3 border-t border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">

        <p className="text-xs text-slate-500 dark:text-slate-400">
          Showing 1–7 of 247 problems
        </p>

        <div className="flex items-center gap-2">

          <button
            type="button"
            className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium transition hover:bg-slate-100 disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800"
            disabled
          >
            Previous
          </button>

          <button
            type="button"
            className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white"
          >
            1
          </button>

          <button
            type="button"
            className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            2
          </button>

          <button
            type="button"
            className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            Next
          </button>

        </div>

      </div>

    </section>
  );
}

export default ProblemsTable;