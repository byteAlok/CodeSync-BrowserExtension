import {
  Code2,
  GitCommit,
  RefreshCw,
  FolderGit2,
  AlertCircle,
  CheckCircle2,
  Clock3,
} from "lucide-react";

function ActivityItem({ activity, isLast }) {
  const config = {
    solution: {
      icon: Code2,
      iconClass:
        "bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400",
    },
    sync: {
      icon: RefreshCw,
      iconClass:
        "bg-cyan-100 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400",
    },
    commit: {
      icon: GitCommit,
      iconClass:
        "bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
    },
    repository: {
      icon: FolderGit2,
      iconClass:
        "bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-500/10 dark:text-fuchsia-400",
    },
    error: {
      icon: AlertCircle,
      iconClass:
        "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400",
    },
  };

  const current = config[activity.type] || config.solution;
  const Icon = current.icon;

  const statusConfig = {
    success: {
      icon: CheckCircle2,
      text: "Success",
      className: "text-emerald-500",
    },
    pending: {
      icon: Clock3,
      text: "Pending",
      className: "text-amber-500",
    },
    error: {
      icon: AlertCircle,
      text: "Failed",
      className: "text-red-500",
    },
  };

  const status = statusConfig[activity.status];
  const StatusIcon = status.icon;

  return (
    <div className={`relative flex gap-3 sm:gap-4 ${isLast ? "" : "pb-6"}`}>
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute bottom-0 left-5 top-10 w-px bg-slate-200 dark:bg-slate-800" />
      )}

      {/* Activity Icon */}
      <div
        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${current.iconClass}`}
      >
        <Icon size={18} />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950 sm:p-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              {activity.title}
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
              {activity.description}
            </p>
          </div>

          <span className="shrink-0 text-[11px] text-slate-400">
            {activity.time}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-400">
            {activity.platform}
          </span>

          <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-400">
            {activity.repository}
          </span>

          <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-slate-500 dark:bg-slate-900 dark:text-slate-400">
            {activity.details}
          </span>
        </div>

        <div className={`mt-3 flex items-center gap-1.5 text-[11px] font-medium ${status.className}`}>
          <StatusIcon size={13} />
          {status.text}
        </div>
      </div>
    </div>
  );
}

export default ActivityItem;