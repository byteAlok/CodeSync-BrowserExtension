import { ArrowUpRight, CalendarDays } from "lucide-react";

function WelcomeSection() {
  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
      
      <div>
        <div className="mb-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <CalendarDays size={16} />
          <span>Thursday, September 18, 2026</span>
        </div>

        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Good afternoon, Alok 👋
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400 sm:text-base">
          Here's a quick overview of your coding activity, GitHub
          synchronization and progress.
        </p>
      </div>

      <button
        type="button"
        className="inline-flex w-fit items-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:scale-[1.02] hover:shadow-violet-500/30"
      >
        View Activity
        <ArrowUpRight size={17} />
      </button>

    </section>
  );
}

export default WelcomeSection;