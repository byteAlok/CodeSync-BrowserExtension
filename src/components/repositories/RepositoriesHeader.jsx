import {
  FolderGit2,
  Plus
} from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

function RepositoriesHeader() {
  return (
    <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

      <div className="flex items-start gap-3">

        <div className="rounded-xl bg-linear-to-br from-violet-600 via-blue-500 to-cyan-400 p-3 shadow-lg shadow-violet-500/20">
          <FolderGit2
            size={23}
            className="text-white"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Repositories
          </h1>

          <p className="mt-1 max-w-2xl text-sm text-slate-500 dark:text-slate-400 sm:text-base">
            Manage your GitHub repositories and configure where CodeSync
            stores your solutions.
          </p>
        </div>

      </div>

      <div className="flex flex-col gap-2 sm:flex-row">

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
        >
          <SiGithub size={17} />
          Browse GitHub
        </button>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:scale-[1.01] hover:shadow-violet-500/30"
        >
          <Plus size={17} />
          Add Repository
        </button>

      </div>

    </section>
  );
}

export default RepositoriesHeader;