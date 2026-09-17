import {
  PieChart,
  CheckCircle2,
} from "lucide-react";

const data = [
  {
    label: "Easy",
    value: 120,
    percentage: 49,
    color: "bg-emerald-500",
    text: "text-emerald-500",
  },
  {
    label: "Medium",
    value: 91,
    percentage: 37,
    color: "bg-orange-500",
    text: "text-orange-500",
  },
  {
    label: "Hard",
    value: 36,
    percentage: 14,
    color: "bg-rose-500",
    text: "text-rose-500",
  },
];

function ProblemDistribution() {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-6">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-violet-500/10 p-2.5">
          <PieChart
            size={21}
            className="text-violet-500"
          />
        </div>

        <div>
          <h2 className="font-semibold">
            Problem Distribution
          </h2>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Breakdown by difficulty
          </p>
        </div>

      </div>

      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">

        {/* Visual Circle */}
        <div className="flex justify-center sm:w-1/2">

          <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 via-orange-500 to-rose-500 p-5">

            <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white dark:bg-slate-900">

              <span className="text-3xl font-bold">
                247
              </span>

              <span className="text-xs text-slate-500 dark:text-slate-400">
                Total Solved
              </span>

            </div>

          </div>

        </div>

        {/* Data */}
        <div className="flex-1 space-y-5">

          {data.map((item) => (
            <div key={item.label}>

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <span
                    className={`h-2.5 w-2.5 rounded-full ${item.color}`}
                  />

                  <span className="text-sm font-medium">
                    {item.label}
                  </span>

                </div>

                <div className="flex items-center gap-2">

                  <span className="text-sm font-bold">
                    {item.value}
                  </span>

                  <span className={`text-xs font-medium ${item.text}`}>
                    {item.percentage}%
                  </span>

                </div>

              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">

                <div
                  className={`h-full rounded-full ${item.color}`}
                  style={{
                    width: `${item.percentage}%`,
                  }}
                />

              </div>

            </div>
          ))}

          <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 p-3 text-xs text-emerald-500">
            <CheckCircle2 size={15} />
            <span>
              49% of your solved problems are Easy.
            </span>
          </div>

        </div>

      </div>

    </article>
  );
}

export default ProblemDistribution;