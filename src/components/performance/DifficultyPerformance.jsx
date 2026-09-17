import { BarChart3 } from "lucide-react";

function DifficultyPerformance() {
  const data = [
    {
      label: "Easy",
      solved: 120,
      attempted: 132,
      accuracy: 91,
      className: "bg-emerald-500",
      textClass: "text-emerald-500",
    },
    {
      label: "Medium",
      solved: 91,
      attempted: 112,
      accuracy: 81,
      className: "bg-amber-500",
      textClass: "text-amber-500",
    },
    {
      label: "Hard",
      solved: 36,
      attempted: 48,
      accuracy: 75,
      className: "bg-red-500",
      textClass: "text-red-500",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
          <BarChart3 size={20} />
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            Difficulty Performance
          </h2>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Success rate across difficulty levels
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        {data.map((item) => (
          <div key={item.label}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {item.label}
                </p>

                <p className="mt-0.5 text-xs text-slate-400">
                  {item.solved} solved / {item.attempted} attempted
                </p>
              </div>

              <span
                className={`text-sm font-bold ${item.textClass}`}
              >
                {item.accuracy}%
              </span>
            </div>

            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div
                className={`h-full rounded-full ${item.className}`}
                style={{ width: `${item.accuracy}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DifficultyPerformance;