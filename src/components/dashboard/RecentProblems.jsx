import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import {
  SiLeetcode,
  SiHackerrank,
  SiGeeksforgeeks,
} from "@icons-pack/react-simple-icons";

const problems = [
  {
    name: "Two Sum",
    platform: "LeetCode",
    difficulty: "Easy",
    language: "C#",
    status: "Synced",
    icon: SiLeetcode,
    color: "#FFA116",
  },
  {
    name: "Binary Tree Traversal",
    platform: "GeeksforGeeks",
    difficulty: "Medium",
    language: "C#",
    status: "Synced",
    icon: SiGeeksforgeeks,
    color: "#2F8D46",
  },
  {
    name: "Array Manipulation",
    platform: "HackerRank",
    difficulty: "Hard",
    language: "C#",
    status: "Pending",
    icon: SiHackerrank,
    color: "#00EA64",
  },
  {
    name: "Valid Parentheses",
    platform: "LeetCode",
    difficulty: "Easy",
    language: "C#",
    status: "Synced",
    icon: SiLeetcode,
    color: "#FFA116",
  },
];

const difficultyStyles = {
  Easy: "bg-emerald-500/10 text-emerald-500",
  Medium: "bg-orange-500/10 text-orange-500",
  Hard: "bg-rose-500/10 text-rose-500",
};

function RecentProblems() {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
      
      <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-slate-800">
        
        <div>
          <h2 className="font-semibold">Recent Problems</h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Your latest coding solutions
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 text-sm font-medium text-blue-500 transition hover:text-violet-500"
        >
          View all
          <ArrowUpRight size={16} />
        </button>

      </div>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-175">
          <thead>
            <tr className="border-b border-slate-200 text-left text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
              <th className="px-5 py-3 font-medium">Problem</th>
              <th className="px-5 py-3 font-medium">Platform</th>
              <th className="px-5 py-3 font-medium">Difficulty</th>
              <th className="px-5 py-3 font-medium">Language</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {problems.map((problem) => {
              const Icon = problem.icon;

              return (
                <tr
                  key={problem.name}
                  className="border-b border-slate-100 transition hover:bg-slate-50 dark:border-slate-800/70 dark:hover:bg-slate-800/40"
                >
                  <td className="px-5 py-4">
                    <p className="font-medium">
                      {problem.name}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon
                        size={17}
                        color={problem.color}
                      />
                      {problem.platform}
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${difficultyStyles[problem.difficulty]}`}
                    >
                      {problem.difficulty}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-500 dark:text-slate-400">
                    {problem.language}
                  </td>

                  <td className="px-5 py-4">
                    {problem.status === "Synced" ? (
                      <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-500">
                        <CheckCircle2 size={15} />
                        Synced
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs font-medium text-orange-500">
                        <Clock3 size={15} />
                        Pending
                      </span>
                    )}
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
            <div
              key={problem.name}
              className="p-4"
            >
              <div className="flex items-start justify-between gap-3">
                
                <div className="flex min-w-0 items-center gap-3">
                  <div className="rounded-lg bg-slate-100 p-2 dark:bg-slate-800">
                    <Icon
                      size={18}
                      color={problem.color}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">
                      {problem.name}
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      {problem.platform} · {problem.language}
                    </p>
                  </div>
                </div>

                <span
                  className={`shrink-0 rounded-full px-2 py-1 text-[11px] font-medium ${difficultyStyles[problem.difficulty]}`}
                >
                  {problem.difficulty}
                </span>

              </div>

              <div className="mt-3">
                {problem.status === "Synced" ? (
                  <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-500">
                    <CheckCircle2 size={14} />
                    Synced to GitHub
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs font-medium text-orange-500">
                    <Clock3 size={14} />
                    Sync pending
                  </span>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </article>
  );
}

export default RecentProblems;