import WelcomeSection from "../components/dashboard/WelcomeSection";
import StatsSection from "../components/dashboard/StatsSection";
import GitHubStatus from "../components/dashboard/GitHubStatus";
import CodingActivity from "../components/dashboard/CodingActivity";
import PlatformOverview from "../components/dashboard/PlatformOverview";
import RepositoryOverview from "../components/dashboard/RepositoryOverview";
import RecentProblems from "../components/dashboard/RecentProblems";

function Dashboard() {
  return (
    <div className="min-h-full w-full dark:text-slate-50 text-slate-900 transition-colors duration-300 ">
      <div className="mx-auto w-full max-w-[1800px] space-y-5 p-4">
        
        {/* Welcome */}
        <WelcomeSection />

        {/* Statistics */}
        <StatsSection />

        {/* GitHub + Activity */} 
        <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">
          <GitHubStatus />
          <CodingActivity />
        </section>

        {/* Platforms + Repositories */}
        <section className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          <PlatformOverview />
          <RepositoryOverview />
        </section>

        {/* Recent Problems */}
        <RecentProblems />

      </div>
    </div>
  );
}

export default Dashboard;