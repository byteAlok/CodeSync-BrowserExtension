import {
  Globe2,
  ArrowUpRight,
} from "lucide-react";

import {
  SiLeetcode,
  SiHackerrank,
  SiGeeksforgeeks,
} from "@icons-pack/react-simple-icons";

const platforms = [
  {
    name: "LeetCode",
    solved: 120,
    percentage: 49,
    icon: SiLeetcode,
    iconColor: "#FFA116",
    bar: "bg-orange-500",
  },
  {
    name: "HackerRank",
    solved: 72,
    percentage: 29,
    icon: SiHackerrank,
    iconColor: "#00EA64",
    bar: "bg-emerald-500",
  },
  {
    name: "GeeksforGeeks",
    solved: 55,
    percentage: 22,
    icon: SiGeeksforgeeks,
    iconColor: "#2F8D46",
    bar: "bg-green-600",
  },
];

function PlatformDistribution() {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-6">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-cyan-500/10 p-2.5">
            <Globe2
              size={21}
              className="text-cyan-500"
            />
          </div>

          <div>
            <h2 className="font-semibold">
              Platform Distribution
            </h2>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Where you solve your problems
            </p>
          </div>

        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          <ArrowUpRight size={18} />
        </button>

      </div>

      <div className="mt-6 space-y-5">

        {platforms.map((platform) => {
          const Icon = platform.icon;

          return (
            <div
              key={platform.name}
              className="rounded-xl border border-slate-200 p-4 dark:border-slate-800"
            >

              <div className="flex items-center justify-between gap-3">

                <div className="flex min-w-0 items-center gap-3">

                  <div className="rounded-lg bg-slate-100 p-2 dark:bg-slate-800">

                    <Icon
                      size={20}
                      color={platform.iconColor}
                    />

                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">
                      {platform.name}
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      {platform.solved} solved
                    </p>
                  </div>

                </div>

                <span className="text-sm font-bold">
                  {platform.percentage}%
                </span>

              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">

                <div
                  className={`h-full rounded-full ${platform.bar}`}
                  style={{
                    width: `${platform.percentage}%`,
                  }}
                />

              </div>

            </div>
          );
        })}

      </div>

    </article>
  );
}

export default PlatformDistribution;