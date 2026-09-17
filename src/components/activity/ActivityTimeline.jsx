import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import ActivityItem from "./ActivityItem";

function ActivityTimeline() {
  const activities = [
    {
      id: 1,
      type: "solution",
      title: "New solution detected",
      description: "Two Sum was detected from LeetCode.",
      platform: "LeetCode",
      repository: "CodeSync-Algorithms",
      time: "2 minutes ago",
      status: "success",
      details: "Easy • C#",
    },
    {
      id: 2,
      type: "sync",
      title: "Solution synchronized",
      description: "Two-Sum.cs was successfully uploaded to GitHub.",
      platform: "GitHub",
      repository: "CodeSync-Algorithms",
      time: "3 minutes ago",
      status: "success",
      details: "main branch",
    },
    {
      id: 3,
      type: "commit",
      title: "Commit created",
      description: "Created a commit containing 1 coding solution.",
      platform: "GitHub",
      repository: "CodeSync-Algorithms",
      time: "3 minutes ago",
      status: "success",
      details: "commit a84f21c",
    },
    {
      id: 4,
      type: "solution",
      title: "New solution detected",
      description: "Array Manipulation was detected from HackerRank.",
      platform: "HackerRank",
      repository: "DSA-Solutions",
      time: "18 minutes ago",
      status: "success",
      details: "Medium • C#",
    },
    {
      id: 5,
      type: "sync",
      title: "Synchronization pending",
      description: "Waiting for the next synchronization cycle.",
      platform: "GeeksforGeeks",
      repository: "Coding-Practice",
      time: "1 hour ago",
      status: "pending",
      details: "Hard • C#",
    },
    {
      id: 6,
      type: "error",
      title: "Synchronization failed",
      description: "Unable to update the solution file on GitHub.",
      platform: "GitHub",
      repository: "Coding-Practice",
      time: "2 hours ago",
      status: "error",
      details: "Permission error",
    },
    {
      id: 7,
      type: "repository",
      title: "Repository connected",
      description: "Coding-Practice was connected to CodeSync.",
      platform: "GitHub",
      repository: "Coding-Practice",
      time: "Yesterday",
      status: "success",
      details: "Public repository",
    },
    {
      id: 8,
      type: "solution",
      title: "New solution detected",
      description: "Valid Parentheses was detected from LeetCode.",
      platform: "LeetCode",
      repository: "CodeSync-Algorithms",
      time: "Yesterday",
      status: "success",
      details: "Easy • C#",
    },
    {
      id: 9,
      type: "commit",
      title: "Commit created",
      description: "Created a commit containing 2 coding solutions.",
      platform: "GitHub",
      repository: "CodeSync-Algorithms",
      time: "Yesterday",
      status: "success",
      details: "commit 7b21ac9",
    },
    {
      id: 10,
      type: "sync",
      title: "Solutions synchronized",
      description: "2 pending solutions were synchronized successfully.",
      platform: "GitHub",
      repository: "DSA-Solutions",
      time: "Yesterday",
      status: "success",
      details: "2 files",
    },
    {
      id: 11,
      type: "solution",
      title: "New solution detected",
      description: "Binary Tree Traversal was detected.",
      platform: "LeetCode",
      repository: "CodeSync-Algorithms",
      time: "2 days ago",
      status: "success",
      details: "Medium • C#",
    },
    {
      id: 12,
      type: "sync",
      title: "Solution synchronized",
      description: "Binary-Tree-Traversal.cs was uploaded to GitHub.",
      platform: "GitHub",
      repository: "CodeSync-Algorithms",
      time: "2 days ago",
      status: "success",
      details: "main branch",
    },
    {
      id: 13,
      type: "repository",
      title: "Repository connected",
      description: "DSA-Solutions was connected to CodeSync.",
      platform: "GitHub",
      repository: "DSA-Solutions",
      time: "2 days ago",
      status: "success",
      details: "Public repository",
    },
    {
      id: 14,
      type: "solution",
      title: "New solution detected",
      description: "LRU Cache was detected from LeetCode.",
      platform: "LeetCode",
      repository: "CodeSync-Algorithms",
      time: "3 days ago",
      status: "success",
      details: "Medium • C#",
    },
    {
      id: 15,
      type: "error",
      title: "Synchronization failed",
      description: "GitHub rejected the requested file update.",
      platform: "GitHub",
      repository: "DSA-Solutions",
      time: "3 days ago",
      status: "error",
      details: "Conflict",
    },
    {
      id: 16,
      type: "commit",
      title: "Commit created",
      description: "Created a commit containing 4 coding solutions.",
      platform: "GitHub",
      repository: "CodeSync-Algorithms",
      time: "4 days ago",
      status: "success",
      details: "commit 31d9fa2",
    },
    {
      id: 17,
      type: "solution",
      title: "New solution detected",
      description: "Graph BFS Traversal was detected.",
      platform: "HackerRank",
      repository: "DSA-Solutions",
      time: "5 days ago",
      status: "success",
      details: "Medium • C#",
    },
    {
      id: 18,
      type: "sync",
      title: "Synchronization pending",
      description: "Solution is waiting for the next sync cycle.",
      platform: "HackerRank",
      repository: "DSA-Solutions",
      time: "5 days ago",
      status: "pending",
      details: "Medium • C#",
    },
    {
      id: 19,
      type: "solution",
      title: "New solution detected",
      description: "Balanced Brackets was detected.",
      platform: "GeeksforGeeks",
      repository: "Coding-Practice",
      time: "6 days ago",
      status: "success",
      details: "Easy • C#",
    },
    {
      id: 20,
      type: "repository",
      title: "Repository settings updated",
      description: "Synchronization configuration was updated.",
      platform: "GitHub",
      repository: "Coding-Practice",
      time: "1 week ago",
      status: "success",
      details: "Sync configuration",
    },
  ];

  // Records shown on one page
  const recordsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    activities.length / recordsPerPage
  );

  const startIndex =
    (currentPage - 1) * recordsPerPage;

  const endIndex = Math.min(
    startIndex + recordsPerPage,
    activities.length
  );

  const currentActivities = activities.slice(
    startIndex,
    endIndex
  );

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Generate visible page numbers
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(
      totalPages - 1,
      currentPage + 1
    );

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Your latest CodeSync events
        </p>
      </div>

      {/* Timeline */}
      <div>
        {currentActivities.map((activity, index) => (
          <ActivityItem
            key={activity.id}
            activity={activity}
            isLast={
              index === currentActivities.length - 1
            }
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Showing */}
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Showing{" "}
            <span className="font-medium text-slate-700 dark:text-slate-300">
              {startIndex + 1}
            </span>
            {" – "}
            <span className="font-medium text-slate-700 dark:text-slate-300">
              {endIndex}
            </span>{" "}
            of{" "}
            <span className="font-medium text-slate-700 dark:text-slate-300">
              {activities.length}
            </span>{" "}
            activities
          </p>

          {/* Pagination Controls */}
          <div className="flex items-center gap-1">
            {/* First */}
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => goToPage(1)}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
              aria-label="First page"
            >
              <ChevronsLeft size={15} />
            </button>

            {/* Previous */}
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() =>
                goToPage(currentPage - 1)
              }
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
              aria-label="Previous page"
            >
              <ChevronLeft size={15} />
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {getPageNumbers().map((page, index) =>
                page === "..." ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="flex h-8 w-7 items-center justify-center text-xs text-slate-400"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={`flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-xs font-medium transition ${
                      currentPage === page
                        ? "bg-violet-600 text-white shadow-sm"
                        : "border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            {/* Next */}
            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() =>
                goToPage(currentPage + 1)
              }
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
              aria-label="Next page"
            >
              <ChevronRight size={15} />
            </button>

            {/* Last */}
            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => goToPage(totalPages)}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
              aria-label="Last page"
            >
              <ChevronsRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActivityTimeline;