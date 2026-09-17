import ProblemsHeader from "../components/problems/ProblemsHeader";
import ProblemsStats from "../components/problems/ProblemsStats";
import ProblemsFilters from "../components/problems/ProblemsFilters";
import ProblemsTable from "../components/problems/ProblemsTable";

function Problems() {
  return (
    <div className="min-h-full w-full text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <div className="mx-auto w-full max-w-[1800px] space-y-5 p-4 sm:p-5 lg:p-6 xl:p-8">

        {/* Page Header */}
        <ProblemsHeader />

        {/* Problem Statistics */}
        <ProblemsStats />

        {/* Search + Filters */}
        <ProblemsFilters />

        {/* Problems */}
        <ProblemsTable />

      </div>
    </div>
  );
}

export default Problems;