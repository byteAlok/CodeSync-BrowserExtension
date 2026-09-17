import {
  CalendarDays,
  Flame,
  TrendingUp,
} from "lucide-react";

function ConsistencyPerformance() {
  const weeks = [
    { label: "Mon", value: 4 },
    { label: "Tue", value: 6 },
    { label: "Wed", value: 3 },
    { label: "Thu", value: 7 },
    { label: "Fri", value: 5 },
    { label: "Sat", value: 8 },
    { label: "Sun", value: 2 },
  ];

  const maxValue = Math.max(
    ...weeks.map((week) => week.value)
  );

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
            <CalendarDays size={20} />
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              Coding Consistency
            </h2>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Problems solved this week
            </p>
          </div>
        </div>

        <Flame
          size={20}
          className="text-orange-500"
        />
      </div>

      <div className="mt-6 flex h-40 items-end justify-between gap-2">
        {weeks.map((week) => {
          const height =
            (week.value / maxValue) * 100;

          return (
            <div
              key={week.label}
              className="flex h-full flex-1 flex-col items-center justify-end gap-2"
            >
              <span className="text-[10px] font-medium text-slate-400">
                {week.value}
              </span>

              <div className="flex h-full w-full max-w-8 items-end">
                <div
                  className="w-full rounded-t-lg bg-linear-to-t from-violet-600 to-fuchsia-400 transition-all"
                  style={{
                    height: `${height}%`,
                  }}
                />
              </div>

              <span className="text-[10px] text-slate-400">
                {week.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center gap-2 border-t border-slate-200 pt-4 dark:border-slate-800">
        <TrendingUp
          size={15}
          className="text-emerald-500"
        />

        <p className="text-xs text-slate-500 dark:text-slate-400">
          Weekly average:{" "}
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            5 problems/day
          </span>
        </p>
      </div>
    </section>
  );
}

export default ConsistencyPerformance;