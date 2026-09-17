import PerformanceHeader from "../components/performance/PerformanceHeader";
import PerformanceStats from "../components/performance/PerformanceStats";
import DifficultyPerformance from "../components/performance/DifficultyPerformance";
import SubjectPerformance from "../components/performance/SubjectPerformance";
import LanguagePerformance from "../components/performance/LanguagePerformance";
import ConsistencyPerformance from "../components/performance/ConsistencyPerformance";

function Performance() {
  return (
    <div className="min-h-full w-full bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto w-full max-w-[1800px] space-y-5 p-4 sm:p-5 lg:p-6 xl:p-8">
        <PerformanceHeader />

        <PerformanceStats />

        <div className="grid gap-5 xl:grid-cols-2">
          <DifficultyPerformance />
          <ConsistencyPerformance />
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          <SubjectPerformance />
          <LanguagePerformance />
        </div>
      </div>
    </div>
  );
}

export default Performance;