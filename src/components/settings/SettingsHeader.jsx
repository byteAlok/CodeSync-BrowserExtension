import { Settings as SettingsIcon, RotateCcw } from "lucide-react";

function SettingsHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/20">
          <SettingsIcon size={22} />
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
            Settings
          </h1>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Manage your CodeSync preferences and integrations
          </p>
        </div>
      </div>

      <button
        type="button"
        className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
      >
        <RotateCcw size={16} />
        Reset Settings
      </button>
    </div>
  );
}

export default SettingsHeader;