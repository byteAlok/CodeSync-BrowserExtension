import {
  Activity,
  TrendingUp,
  CalendarDays,
} from "lucide-react";

const weeks = [
  {
    label: "Week 1",
    easy: 14,
    medium: 8,
    hard: 3,
  },
  {
    label: "Week 2",
    easy: 18,
    medium: 11,
    hard: 4,
  },
  {
    label: "Week 3",
    easy: 22,
    medium: 13,
    hard: 6,
  },
  {
    label: "Week 4",
    easy: 27,
    medium: 16,
    hard: 8,
  },
];

function CodingTrend() {
  const maxValue = 55;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-6">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-blue-500/10 p-2.5">
            <Activity
              size={21}
              className="text-blue-500"
            />
          </div>

          <div>
            <h2 className="font-semibold">
              Coding Trend
            </h2>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Problems solved during the selected period
            </p>
          </div>

        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-emerald-500">
          <TrendingUp size={15} />
          Growing consistently
        </div>

      </div>

      {/* Legend */}
      <div className="mt-5 flex flex-wrap gap-4 text-xs">

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          Easy
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
          Medium
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
          Hard
        </div>

      </div>

      {/* Chart */}
      <div className="mt-6 overflow-x-auto">

        <div className="min-w-150">

          <div className="flex h-64 items-end gap-5 border-b border-l border-slate-200 px-4 pb-0 dark:border-slate-800">

            {weeks.map((week) => {

              const total =
                week.easy +
                week.medium +
                week.hard;

              const easyHeight =
                (week.easy / maxValue) * 100;

              const mediumHeight =
                (week.medium / maxValue) * 100;

              const hardHeight =
                (week.hard / maxValue) * 100;

              return (
                <div
                  key={week.label}
                  className="flex h-full flex-1 flex-col items-center justify-end"
                >

                  <div className="mb-2 text-xs font-semibold">
                    {total}
                  </div>

                  <div className="flex w-full max-w-20 flex-col justify-end">

                    <div
                      className="rounded-t-md bg-rose-500 transition-all duration-500"
                      style={{
                        height: `${hardHeight}px`,
                      }}
                    />

                    <div
                      className="bg-orange-500 transition-all duration-500"
                      style={{
                        height: `${mediumHeight}px`,
                      }}
                    />

                    <div
                      className="bg-emerald-500 transition-all duration-500"
                      style={{
                        height: `${easyHeight}px`,
                      }}
                    />

                  </div>

                  <div className="mt-3 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <CalendarDays size={12} />
                    {week.label}
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </article>
  );
}

export default CodingTrend;