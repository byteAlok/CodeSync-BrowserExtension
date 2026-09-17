import {
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Unplug,
} from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

function GitHubConnection() {
  const connected = true;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
      <div className="flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
              <SiGithub size={21} />
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                GitHub Connection
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Connect CodeSync with your GitHub account
              </p>
            </div>
          </div>

          {connected && (
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <CheckCircle2 size={14} />
              Connected
            </span>
          )}
        </div>

        {/* Account */}
        {connected ? (
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-violet-500 via-fuchsia-500 to-pink-500 text-sm font-bold text-white">
                  AM
                </div>

                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Alok Maurya
                  </p>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    @AlokSDE
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <ExternalLink size={15} />
                View Profile
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            <S size={18} />
            Connect GitHub
          </button>
        )}

        {/* Permissions */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <ShieldCheck
              size={17}
              className="text-violet-500"
            />

            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Connected Permissions
            </h3>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {[
              "Read repositories",
              "Create & update files",
              "Create commits",
              "Manage branches",
            ].map((permission) => (
              <div
                key={permission}
                className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2.5 text-sm text-slate-600 dark:bg-slate-950 dark:text-slate-400"
              >
                <CheckCircle2
                  size={15}
                  className="shrink-0 text-emerald-500"
                />
                {permission}
              </div>
            ))}
          </div>
        </div>

        {/* Disconnect */}
        {connected && (
          <div className="border-t border-slate-200 pt-4 dark:border-slate-800">
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-medium text-red-500 transition hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
            >
              <Unplug size={16} />
              Disconnect GitHub
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default GitHubConnection;