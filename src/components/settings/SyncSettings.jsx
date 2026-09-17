import { useState } from "react";
import {
  GitBranch,
  RefreshCw,
  UploadCloud,
  FileText,
  FolderSync,
  ChevronDown,
} from "lucide-react";

function SyncSettings() {
  const [autoSync, setAutoSync] = useState(true);
  const [readme, setReadme] = useState(true);
  const [commit, setCommit] = useState(true);
  const [branch, setBranch] = useState("main");

  const Toggle = ({ enabled, setEnabled }) => (
    <button
      type="button"
      onClick={() => setEnabled(!enabled)}
      aria-pressed={enabled}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ${
        enabled
          ? "bg-violet-600"
          : "bg-slate-300 dark:bg-slate-700"
      }`}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all duration-200 ${
          enabled ? "left-6" : "left-1"
        }`}
      />
    </button>
  );

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
      {/* Header */}
      <div className="mb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
            <FolderSync size={20} />
          </div>

          <div className="min-w-0">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              Sync Settings
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Control how your coding solutions are synchronized
            </p>
          </div>
        </div>
      </div>

      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        {/* Automatic Sync */}
        <div className="flex items-center justify-between gap-4 py-4 first:pt-0">
          <div className="flex min-w-0 items-start gap-3">
            <RefreshCw
              size={18}
              className="mt-0.5 shrink-0 text-violet-500"
            />

            <div className="min-w-0">
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                Automatic Sync
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Automatically sync newly detected solutions to GitHub
              </p>
            </div>
          </div>

          <Toggle
            enabled={autoSync}
            setEnabled={setAutoSync}
          />
        </div>

        {/* Generate README */}
        <div className="flex items-center justify-between gap-4 py-4">
          <div className="flex min-w-0 items-start gap-3">
            <FileText
              size={18}
              className="mt-0.5 shrink-0 text-fuchsia-500"
            />

            <div className="min-w-0">
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                Generate README
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Keep repository README files updated with solution statistics
              </p>
            </div>
          </div>

          <Toggle
            enabled={readme}
            setEnabled={setReadme}
          />
        </div>

        {/* Auto Commit */}
        <div className="flex items-center justify-between gap-4 py-4">
          <div className="flex min-w-0 items-start gap-3">
            <UploadCloud
              size={18}
              className="mt-0.5 shrink-0 text-cyan-500"
            />

            <div className="min-w-0">
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                Auto Commit
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Create a Git commit after successfully syncing a solution
              </p>
            </div>
          </div>

          <Toggle
            enabled={commit}
            setEnabled={setCommit}
          />
        </div>

        {/* Default Branch */}
        <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-start gap-3">
            <GitBranch
              size={18}
              className="mt-0.5 shrink-0 text-emerald-500"
            />

            <div className="min-w-0">
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                Default Branch
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Branch used for solution synchronization
              </p>
            </div>
          </div>

          {/* Custom Select */}
          <div className="relative w-full sm:w-auto">
            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 py-2 pr-9 text-sm font-medium text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:focus:border-emerald-500 sm:min-w-32"
            >
              <option value="main">main</option>
              <option value="master">master</option>
              <option value="develop">develop</option>
            </select>

            <ChevronDown
              size={16}
              strokeWidth={2}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SyncSettings;