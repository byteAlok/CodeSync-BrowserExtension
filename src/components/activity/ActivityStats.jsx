import {
  Activity,
  CheckCircle2,
  GitCommit,
  XCircle,
} from "lucide-react";

function ActivityStats() {
  const stats = [
    {
      label: "Total Activities",
      value: "486",
      icon: Activity,
      iconClass: "text-violet-500",
      bgClass: "bg-violet-100 dark:bg-violet-500/10",
    },
    {
      label: "Successful Syncs",
      value: "367",
      icon: CheckCircle2,
      iconClass: "text-emerald-500",
      bgClass: "bg-emerald-100 dark:bg-emerald-500/10",
    },
    {
      label: "Git Commits",
      value: "86",
      icon: GitCommit,
      iconClass: "text-cyan-500",
      bgClass: "bg-cyan-100 dark:bg-cyan-500/10",
    },
    {
      label: "Failed Actions",
      value: "6",
      icon: XCircle,
      iconClass: "text-red-500",
      bgClass: "bg-red-100 dark:bg-red-500/10",
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
          </div>
        );
      })}
    </div>
  );
}

export default ActivityStats;