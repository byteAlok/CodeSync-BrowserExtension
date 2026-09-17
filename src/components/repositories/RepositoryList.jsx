import RepositoryCard from "./RepositoryCard";

const repositories = [
  {
    id: 1,
    name: "CodeSync-Algorithms",
    description:
      "Coding solutions synchronized automatically from LeetCode, HackerRank and GeeksforGeeks.",
    visibility: "Private",
    defaultBranch: "main",
    solutions: 247,
    platforms: 3,
    commits: 64,
    lastSync: "2 min ago",
    status: "Synced",
    size: "8.4 MB",
    language: "C#",
    topics: ["leetcode", "hackerrank", "gfg"],
  },
  {
    id: 2,
    name: "DSA-Solutions",
    description:
      "Data structures and algorithms practice solutions organized by topic and difficulty.",
    visibility: "Public",
    defaultBranch: "main",
    solutions: 84,
    platforms: 2,
    commits: 17,
    lastSync: "18 min ago",
    status: "Synced",
    size: "3.2 MB",
    language: "C#",
    topics: ["dsa", "algorithms"],
  },
  {
    id: 3,
    name: "Coding-Practice",
    description:
      "General programming practice and problem solving repository.",
    visibility: "Public",
    defaultBranch: "main",
    solutions: 42,
    platforms: 1,
    commits: 5,
    lastSync: "1 hour ago",
    status: "Syncing",
    size: "1.7 MB",
    language: "JavaScript",
    topics: ["practice", "coding"],
  },
];

function RepositoryList() {
  return (
    <section className="space-y-4">

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h2 className="text-lg font-semibold">
            Your Repositories
          </h2>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Select a repository to view its CodeSync configuration.
          </p>
        </div>

        <span className="w-fit rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          3 repositories
        </span>

      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">

        {repositories.map((repository) => (
          <RepositoryCard
            key={repository.id}
            repository={repository}
          />
        ))}

      </div>

    </section>
  );
}

export default RepositoryList;