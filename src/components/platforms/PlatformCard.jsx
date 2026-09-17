import {
  CheckCircle2,
  ExternalLink,
  RefreshCw,
  Settings,
  Clock3,
  CircleDot,
} from "lucide-react";

import {
  SiLeetcode,
  SiHackerrank,
  SiGeeksforgeeks,
} from "@icons-pack/react-simple-icons";

function PlatformCard({ platform }) {
  const platformIcons = {
    leetcode: SiLeetcode,
    hackerrank: SiHackerrank,
    geeksforgeeks: SiGeeksforgeeks,
  };

  const PlatformIcon = platformIcons[platform.id];

  const isSyncing = platform.syncStatus === "Syncing";

  const percentage = Math.round(
    (platform.solved / platform.total) * 100
  );

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 sm:p-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-white">
            <PlatformIcon size={23} />
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-base font-semibold text-slate-900 dark:text-white">
              {platform.name}
            </h2>

            <p className="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400">
              @{platform.username}
            </p>
          </div>
        </div>

        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
            platform.connected
              ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
              : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {platform.connected ? "Connected" : "Disconnected"}
        </span>
      </div>

      {/* Solved */}
      <div className="mt-6">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Problems Solved
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
              {platform.solved}
            </p>
          </div>

          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {percentage}% of tracked
          </p>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div
            className="h-full rounded-full bg-linear-to-r from-violet-500 via-fuchsia-500 to-cyan-500 transition-all duration-500"
            style={{
              width: `${Math.max(percentage, 3)}%`,
            }}
          />
        </div>
      </div>

      {/* Difficulty */}
      <div className="mt-5 grid grid-cols-3 gap-2">
        <div className="rounded-lg bg-emerald-50 p-2.5 dark:bg-emerald-500/10">
          <p className="text-[11px] text-emerald-600 dark:text-emerald-400">
            Easy
          </p>

          <p className="mt-0.5 text-sm font-bold text-emerald-700 dark:text-emerald-300">
            {platform.easy}
          </p>
        </div>

        <div className="rounded-lg bg-amber-50 p-2.5 dark:bg-amber-500/10">
          <p className="text-[11px] text-amber-600 dark:text-amber-400">
            Medium
          </p>

          <p className="mt-0.5 text-sm font-bold text-amber-700 dark:text-amber-300">
            {platform.medium}
          </p>
        </div>

        <div className="rounded-lg bg-red-50 p-2.5 dark:bg-red-500/10">
          <p className="text-[11px] text-red-600 dark:text-red-400">
            Hard
          </p>

          <p className="mt-0.5 text-sm font-bold text-red-700 dark:text-red-300">
            {platform.hard}
          </p>
        </div>
      </div>

      {/* Sync Information */}
      <div className="mt-5 space-y-2.5 border-t border-slate-200 pt-4 dark:border-slate-800">
        <div className="flex items-center justify-between gap-3 text-xs">
          <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <CheckCircle2
              size={14}
              className="text-emerald-500"
            />
            Synced
          </span>

          <span className="font-medium text-slate-700 dark:text-slate-300">
            {platform.synced}
          </span>
        </div>

        <div className="flex items-center justify-between gap-3 text-xs">
          <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <CircleDot
              size={14}
              className="text-amber-500"
            />
            Pending
          </span>

          <span className="font-medium text-slate-700 dark:text-slate-300">
            {platform.pending}
          </span>
        </div>

        <div className="flex items-center justify-between gap-3 text-xs">
          <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Clock3 size={14} />
            Last Sync
          </span>

          <span className="font-medium text-slate-700 dark:text-slate-300">
            {platform.lastSync}
          </span>
        </div>
      </div>

      {/* Status */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-medium ${
            isSyncing
              ? "text-blue-500"
              : "text-emerald-500"
          }`}
        >
          <RefreshCw
            size={14}
            className={isSyncing ? "animate-spin" : ""}
          />

          {platform.syncStatus}
        </span>

        <span className="text-xs text-slate-500 dark:text-slate-400">
          {platform.language}
        </span>
      </div>

      {/* Actions */}
      <div className="mt-5 grid grid-cols-2 gap-2">
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          <RefreshCw size={14} />
          Sync Now
        </button>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <Settings size={14} />
          Configure
        </button>
      </div>

      {/* External Profile */}
      <button
        type="button"
        className="mt-3 inline-flex w-full items-center justify-center gap-2 text-xs font-medium text-slate-500 transition hover:text-violet-500 dark:text-slate-400 dark:hover:text-violet-400"
      >
        <ExternalLink size={13} />
        View {platform.name} Profile
      </button>
    </div>
  );
}

export default PlatformCard;