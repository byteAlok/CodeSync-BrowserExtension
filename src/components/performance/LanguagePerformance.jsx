import {
  Code2,
  Trophy,
} from "lucide-react";

function LanguagePerformance() {
  const languages = [
    {
      name: "C#",
      solved: 214,
      percentage: 86,
    },
    {
      name: "JavaScript",
      solved: 31,
      percentage: 12,
    },
    {
      name: "Python",
      solved: 5,
      percentage: 2,
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-500/10 dark:text-fuchsia-400">
          <Code2 size={20} />
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            Language Performance
          </h2>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Languages used for your solutions
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {languages.map((language, index) => (
          <div key={language.name}>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {index === 0 && (
                  <Trophy
                    size={14}
                    className="text-amber-500"
                  />
                )}

                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {language.name}
                </span>
              </div>

              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {language.solved} solutions
              </span>
            </div>

            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div
                className="h-full rounded-full bg-linear-to-r from-fuchsia-500 to-violet-500"
                style={{
                  width: `${language.percentage}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LanguagePerformance;