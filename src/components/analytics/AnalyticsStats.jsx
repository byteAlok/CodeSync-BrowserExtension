import {
  CheckCircle2,
  TrendingUp,
  CalendarCheck2,
  GitCommitHorizontal,
} from "lucide-react";

const stats = [
  {
    title: "Total Solved",
    value: "247",
    change: "+18%",
    description: "vs previous period",
    icon: CheckCircle2,
    iconClass: "text-emerald-500",
    bgClass: "bg-emerald-500/10",
  },
  {
    title: "Problems / Day",
    value: "3.4",
    change: "+0.8",
    description: "daily average",
    icon: TrendingUp,
    iconClass: "text-blue-500",
    bgClass: "bg-blue-500/10",
  },
  {
    title: "Active Days",
    value: "24",
    change: "+4",
    description: "this month",
    icon: CalendarCheck2,
    iconClass: "text-violet-500",
    bgClass: "bg-violet-500/10",
  },
  {
    title: "GitHub Commits",
    value: "86",
    change: "+21%",
    description: "coding commits",
    icon: GitCommitHorizontal,
    iconClass: "text-orange-500",
    bgClass: "bg-orange-500/10",
  },
];

function AnalyticsStats() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >

            <div className="flex items-start justify-between gap-4">

              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {stat.title}
                </p>

                <div className="mt-2 flex items-end gap-2">
                  <p className="text-3xl font-bold">
                    {stat.value}
                  </p>

                  <span className="mb-1 text-xs font-semibold text-emerald-500">
                    {stat.change}
                  </span>
                </div>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {stat.description}
                </p>
              </div>

              <div className={`rounded-xl p-3 ${stat.bgClass}`}>
                <Icon
                  size={22}
                  className={stat.iconClass}
                />
              </div>

            </div>

          </article>
        );
      })}

    </section>
  );
}

export default AnalyticsStats;