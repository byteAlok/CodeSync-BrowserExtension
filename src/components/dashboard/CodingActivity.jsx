import { Activity, TrendingUp } from "lucide-react";

const activity = [
  20, 35, 25, 55, 40, 70, 48,
  65, 45, 80, 62, 90, 72, 58,
  76, 68, 95, 72, 85, 70, 88,
  60, 78, 92, 74, 86, 68, 82,
];

function CodingActivity() {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 xl:col-span-2">
      
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-500/10 p-2.5">
            <Activity className="text-blue-500" size={21} />
          </div>

          <div>
            <h2 className="font-semibold">Coding Activity</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Your recent solving activity
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-emerald-500">
          <TrendingUp size={15} />
          +18% this month
        </div>

      </div>

      <div className="mt-6 flex h-44 items-end gap-1 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950 sm:gap-2">
        {activity.map((height, index) => (
          <div
            key={index}
            className="group relative flex h-full flex-1 items-end"
          >
            <div
              className="w-full rounded-t-md bg-linear-to-t from-violet-600 via-blue-500 to-cyan-400 opacity-80 transition-all duration-300 group-hover:opacity-100"
              style={{
                height: `${height}%`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="mt-3 flex justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>28 days ago</span>
        <span>Today</span>
      </div>

    </article>
  );
}

export default CodingActivity;