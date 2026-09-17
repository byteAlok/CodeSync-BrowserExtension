import ActivityHeader from "../components/activity/ActivityHeader";
import ActivityStats from "../components/activity/ActivityStats";
import ActivityFilters from "../components/activity/ActivityFilters";
import ActivityTimeline from "../components/activity/ActivityTimeline";

function Activity() {
  return (
    <div className="min-h-full w-full bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto w-full max-w-[1800px] space-y-5 p-4 sm:p-5 lg:p-6 xl:p-8">
        <ActivityHeader />

        <ActivityStats />

        <ActivityFilters />

        <ActivityTimeline />
      </div>
    </div>
  );
}

export default Activity;