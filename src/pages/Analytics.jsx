import AnalyticsHeader from "../components/analytics/AnalyticsHeader";
import AnalyticsStats from "../components/analytics/AnalyticsStats";
import CodingTrend from "../components/analytics/CodingTrend";
import ProblemDistribution from "../components/analytics/ProblemDistribution";
import PlatformDistribution from "../components/analytics/PlatformDistribution";
import GitHubActivity from "../components/analytics/GitHubActivity";

function Analytics() {
  return (
    <div className="min-h-full w-full text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <div className="mx-auto w-full max-w-[1800px] space-y-5 p-4 sm:p-5 lg:p-6 xl:p-8">

        <AnalyticsHeader />

        <AnalyticsStats />

        <CodingTrend />

        <section className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          <ProblemDistribution />
          <PlatformDistribution />
        </section>

        <GitHubActivity />

      </div>
    </div>
  );
}

export default Analytics;