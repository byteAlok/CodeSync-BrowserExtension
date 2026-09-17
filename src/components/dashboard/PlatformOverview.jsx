import { ArrowUpRight } from "lucide-react";
import {
  SiLeetcode,
  SiHackerrank,
  SiGeeksforgeeks,
} from "@icons-pack/react-simple-icons";

const platforms = [
  {
    name: "LeetCode",
    solved: 120,
    total: 250,
    icon: SiLeetcode,
    color: "#FFA116",
  },
  {
    name: "HackerRank",
    solved: 72,
    total: 150,
    icon: SiHackerrank,
    color: "#00EA64",
  },
  {
    name: "GeeksforGeeks",
    solved: 55,
    total: 120,
    icon: SiGeeksforgeeks,
    color: "#2F8D46",
  },
];

function PlatformOverview() {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
      
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold">Platform Overview</h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Problems solved across platforms
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="mt-5 space-y-4">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          const percentage = Math.round(
            (platform.solved / platform.total) * 100
          );

          return (
            <div
              key={platform.name}
              className="rounded-xl border border-slate-200 p-4 dark:border-slate-800"
            >
              <div className="flex items-center justify-between gap-3">
                
                <div className="flex min-w-0 items-center gap-3">
                  <div className="rounded-lg bg-slate-100 p-2 dark:bg-slate-800">
                    <Icon
                      size={21}
                      color={platform.color}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">
                      {platform.name}
                    </p>

                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {platform.solved} problems solved
                    </p>
                  </div>

                </div>

                <span className="shrink-0 text-sm font-semibold">
                  {percentage}%
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  className="h-full rounded-full bg-linear-to-r from-violet-600 to-cyan-400"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

    </article>
  );
}

export default PlatformOverview;