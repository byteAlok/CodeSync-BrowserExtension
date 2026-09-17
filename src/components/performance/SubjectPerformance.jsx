import {
  BookOpen,
  ChevronRight,
} from "lucide-react";

function SubjectPerformance() {
  const subjects = [
    {
      name: "Arrays",
      solved: 57,
      accuracy: 92,
      progress: 78,
    },
    {
      name: "Strings",
      solved: 35,
      accuracy: 89,
      progress: 71,
    },
    {
      name: "Trees",
      solved: 37,
      accuracy: 82,
      progress: 66,
    },
    {
      name: "Graphs",
      solved: 23,
      accuracy: 76,
      progress: 52,
    },
    {
      name: "Linked List",
      solved: 19,
      accuracy: 86,
      progress: 61,
    },
    {
      name: "Dynamic Programming",
      solved: 20,
      accuracy: 73,
      progress: 48,
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400">
          <BookOpen size={20} />
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            Subject Performance
          </h2>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Progress and accuracy by topic
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        {subjects.map((subject) => (
          <div
            key={subject.name}
            className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-300">
                  {subject.name}
                </p>

                <p className="mt-0.5 text-xs text-slate-400">
                  {subject.solved} solved
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <span className="text-xs font-semibold text-emerald-500">
                  {subject.accuracy}%
                </span>

                <ChevronRight
                  size={15}
                  className="text-slate-400"
                />
              </div>
            </div>

            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div
                className="h-full rounded-full bg-linear-to-r from-cyan-500 to-violet-500"
                style={{
                  width: `${subject.progress}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SubjectPerformance;