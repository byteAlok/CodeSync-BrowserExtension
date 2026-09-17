import {
  Brain,
  Flame,
  Gauge,
  Target,
} from "lucide-react";

function PerformanceStats() {
  const stats = [
    {
      label: "Problems / Day",
      value: "3.4",
      change: "+12.5%",
      icon: Gauge,
      iconClass: "text-violet-500",
      bgClass: "bg-violet-100 dark:bg-violet-500/10",
    },
    {
      label: "Current Streak",
      value: "12 days",
      change: "+3 days",
      icon: Flame,
      iconClass: "text-orange-500",
      bgClass: "bg-orange-100 dark:bg-orange-500/10",
    },
    {
      label: "Accuracy",
      value: "84.6%",
      change: "+4.2%",
      icon: Target,
      iconClass: "text-emerald-500",
      bgClass: "bg-emerald-100 dark:bg-emerald-500/10",
    },
    {
      label: "Avg. Difficulty",
      value: "Medium",
      change: "Stable",
      icon: Brain,
      iconClass: "text-cyan-500",
      bgClass: "bg-cyan-100 dark:bg-cyan-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-5"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${stat.bgClass} ${stat.iconClass}`}
              >
                <Icon size={18} />
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>

                <p className="mt-0.5 text-lg font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            </div>

            <p className="mt-3 text-xs font-medium text-emerald-500">
              {stat.change}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default PerformanceStats;