import RepositoriesHeader from "../components/repositories/RepositoriesHeader";
import RepositoryStats from "../components/repositories/RepositoryStats";
import RepositoryFilters from "../components/repositories/RepositoryFilters";
import RepositoryList from "../components/repositories/RepositoryList";

function Repositories() {
  return (
    <div className="min-h-full w-full text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <div className="mx-auto w-full max-w-[1800px] space-y-5 p-4 sm:p-5 lg:p-6 xl:p-8">

        <RepositoriesHeader />

        <RepositoryStats />

        <RepositoryFilters />

        <RepositoryList />

      </div>
    </div>
  );
}

export default Repositories;