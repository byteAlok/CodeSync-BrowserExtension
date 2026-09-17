import { Code2, Plus } from "lucide-react";

function ProblemsHeader() {
  return (
    <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

      <div className="flex items-start gap-3">

        <div className="rounded-xl bg-linear-to-br from-violet-600 via-blue-500 to-cyan-400 p-3 shadow-lg shadow-violet-500/20">
          <Code2
            size={23}
            className="text-white"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Problems
          </h1>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
            Manage and track your coding problems and GitHub solutions.
          </p>
        </div>

      </div>

      <button
        type="button"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:scale-[1.01] hover:shadow-violet-500/30 sm:w-auto"
      >
        <Plus size={17} />
        Add Problem
      </button>

    </section>
  );
}

export default ProblemsHeader;