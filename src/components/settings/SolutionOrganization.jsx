import { useState } from "react";
import {
  FolderTree,
  FileCode2,
  Layers3,
  CopyCheck,
  Tags,
  ChevronDown,
} from "lucide-react";

function SolutionOrganization() {
  const [structure, setStructure] = useState("platform");
  const [filename, setFilename] = useState("problem-name");
  const [duplicateHandling, setDuplicateHandling] = useState("update");

  const SelectArrow = () => (
    <ChevronDown
      size={17}
      strokeWidth={2}
      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400"
    />
  );

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400">
          <FolderTree size={20} />
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            Solution Organization
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Control how coding solutions are organized in your repositories
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {/* Folder Structure */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Layers3
              size={16}
              className="text-violet-500"
            />

            <label className="text-sm font-medium text-slate-800 dark:text-slate-200">
              Folder Structure
            </label>
          </div>

          <div className="relative">
            <select
              value={structure}
              onChange={(e) => setStructure(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-10 text-sm text-slate-700 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:focus:border-violet-500"
            >
              <option value="platform">
                Platform / Difficulty / Problem
              </option>

              <option value="difficulty">
                Difficulty / Platform / Problem
              </option>

              <option value="platform-only">
                Platform / Problem
              </option>
            </select>

            <SelectArrow />
          </div>

          {/* Folder Preview */}
          <div className="mt-2 overflow-x-auto rounded-lg bg-slate-50 px-3 py-2.5 font-mono text-xs leading-5 text-slate-500 dark:bg-slate-950 dark:text-slate-400">
            <div className="min-w-max">
              <div>CodeSync-Algorithms/</div>
              <div>├── LeetCode/</div>
              <div>│&nbsp;&nbsp; ├── Easy/</div>
              <div>│&nbsp;&nbsp; ├── Medium/</div>
              <div>│&nbsp;&nbsp; └── Hard/</div>
            </div>
          </div>
        </div>

        {/* Solution Filename */}
        <div className="border-t border-slate-200 pt-5 dark:border-slate-800">
          <div className="mb-2 flex items-center gap-2">
            <FileCode2
              size={16}
              className="text-cyan-500"
            />

            <label className="text-sm font-medium text-slate-800 dark:text-slate-200">
              Solution Filename
            </label>
          </div>

          <div className="relative">
            <select
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-10 text-sm text-slate-700 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:focus:border-cyan-500"
            >
              <option value="problem-name">
                Problem Name
              </option>

              <option value="problem-number">
                Problem Number + Name
              </option>

              <option value="slug">
                Problem Slug
              </option>
            </select>

            <SelectArrow />
          </div>

          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Example:{" "}
            <span className="font-mono text-slate-700 dark:text-slate-300">
              Two-Sum.cs
            </span>
          </p>
        </div>

        {/* Duplicate Solutions */}
        <div className="border-t border-slate-200 pt-5 dark:border-slate-800">
          <div className="mb-2 flex items-center gap-2">
            <CopyCheck
              size={16}
              className="text-emerald-500"
            />

            <label className="text-sm font-medium text-slate-800 dark:text-slate-200">
              Duplicate Solutions
            </label>
          </div>

          <div className="relative">
            <select
              value={duplicateHandling}
              onChange={(e) =>
                setDuplicateHandling(e.target.value)
              }
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-10 text-sm text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:focus:border-emerald-500"
            >
              <option value="update">
                Update existing solution
              </option>

              <option value="skip">
                Skip duplicate solution
              </option>

              <option value="version">
                Create a new version
              </option>
            </select>

            <SelectArrow />
          </div>
        </div>

        {/* Solution Metadata */}
        <div className="border-t border-slate-200 pt-5 dark:border-slate-800">
          <div className="flex items-start gap-3">
            <Tags
              size={17}
              className="mt-0.5 shrink-0 text-orange-500"
            />

            <div>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                Solution Metadata
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                CodeSync will keep platform, difficulty, language
                and problem information with each synchronized
                solution.
              </p>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Platform",
              "Difficulty",
              "Language",
              "Problem",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionOrganization;