import {
  FolderGit2,
  FileCode2,
  GitCommitHorizontal,
  RefreshCw,
} from "lucide-react";

const stats = [
  {
    title: "Repositories",
    value: "3",
    description: "Connected repositories",
    icon: FolderGit2,
    iconClass: "text-violet-500",
    bgClass: "bg-violet-500/10",
  },
  {
    title: "Solutions",
    value: "373",
    description: "Stored on GitHub",
    icon: FileCode2,
    iconClass: "text-blue-500",
    bgClass: "bg-blue-500/10",
  },
  {
    title: "Commits",
    value: "86",
    description: "Created by CodeSync",
    icon: GitCommitHorizontal,
    iconClass: "text-emerald-500",
    bgClass: "bg-emerald-500/10",
  },
  {
    title: "Sync Rate",
    value: "98%",
    description: "Successful synchronization",
    icon: RefreshCw,
    iconClass: "text-orange-500",
    bgClass: "bg-orange-500/10",
  },
];

function RepositoryStats() {
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

export default RepositoryStats;