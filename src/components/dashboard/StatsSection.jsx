import {
  CheckCircle2,
  Flame,
  CircleDot,
  Trophy,
} from "lucide-react";

const stats = [
  {
    title: "Total Solved",
    value: "247",
    subtitle: "+12 this month",
    icon: CheckCircle2,
    iconClass: "text-emerald-500",
    bgClass: "bg-emerald-500/10",
  },
  {
    title: "Day Streak",
    value: "12",
    subtitle: "Keep it going!",
    icon: Flame,
    iconClass: "text-orange-500",
    bgClass: "bg-orange-500/10",
  },
  {
    title: "This Month",
    value: "72",
    subtitle: "+18% from last month",
    icon: CircleDot,
    iconClass: "text-blue-500",
    bgClass: "bg-blue-500/10",
  },
  {
    title: "Longest Streak",
    value: "28",
    subtitle: "Personal best",
    icon: Trophy,
    iconClass: "text-violet-500",
    bgClass: "bg-violet-500/10",
  },
];

function StatsSection() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-start justify-between">
              
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {stat.title}
                </p>

                <p className="mt-2 text-3xl font-bold tracking-tight">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {stat.subtitle}
                </p>
              </div>

              <div
                className={`rounded-xl p-3 ${stat.bgClass}`}
              >
                <Icon
                  size={22}
                  strokeWidth={2}
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

export default StatsSection;