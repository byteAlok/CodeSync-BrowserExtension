import {
  CheckCircle2,
  CircleDot,
  Flame,
  Layers3,
} from "lucide-react";

const stats = [
  {
    title: "Total Solved",
    value: "247",
    description: "Across all platforms",
    icon: CheckCircle2,
    iconClass: "text-emerald-500",
    bgClass: "bg-emerald-500/10",
  },
  {
    title: "Easy",
    value: "120",
    description: "48.6% of total",
    icon: CircleDot,
    iconClass: "text-green-500",
    bgClass: "bg-green-500/10",
  },
  {
    title: "Medium",
    value: "91",
    description: "36.8% of total",
    icon: Layers3,
    iconClass: "text-orange-500",
    bgClass: "bg-orange-500/10",
  },
  {
    title: "Hard",
    value: "36",
    description: "14.6% of total",
    icon: Flame,
    iconClass: "text-rose-500",
    bgClass: "bg-rose-500/10",
  },
];

function ProblemsStats() {
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

                <p className="mt-2 text-3xl font-bold">
                  {stat.value}
                </p>

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

export default ProblemsStats;