import PlatformsHeader from "../components/platforms/PlatformsHeader";
import PlatformStats from "../components/platforms/PlatformStats";
import PlatformList from "../components/platforms/PlatformList";
import PlatformSubjectBreakdown from "../components/platforms/PlatformSubjectBreakdown";

function Platforms() {
  return (
    <div className="min-h-full w-full bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto w-full max-w-[1800px] space-y-5 p-4 sm:p-5 lg:p-6 xl:p-8">
        <PlatformsHeader />

        <PlatformStats />

        <PlatformList />

        <PlatformSubjectBreakdown />
      </div>
    </div>
  );
}

export default Platforms;