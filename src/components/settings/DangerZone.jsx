import { useState } from "react";
import {
  AlertTriangle,
  Trash2,
  ChevronRight,
  ChevronDown,
  Folder,
  FolderOpen,
  FileCode2,
  X,
} from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

function DangerZone() {
  const [repository, setRepository] = useState("CodeSync-Algorithms");

  const [expanded, setExpanded] = useState({
    leetcode: true,
    easy: false,
    medium: false,
    hard: false,
    hackerrank: false,
    algorithms: false,
  });

  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const repositories = [
    "CodeSync-Algorithms",
    "DSA-Solutions",
    "Coding-Practice",
  ];

  const fileTree = [
    {
      id: "leetcode",
      name: "LeetCode",
      type: "folder",
      children: [
        {
          id: "easy",
          name: "Easy",
          type: "folder",
          children: [
            {
              id: "two-sum",
              name: "Two-Sum.cs",
              type: "file",
            },
            {
              id: "valid-parentheses",
              name: "Valid-Parentheses.cs",
              type: "file",
            },
          ],
        },
        {
          id: "medium",
          name: "Medium",
          type: "folder",
          children: [
            {
              id: "lru-cache",
              name: "LRU-Cache.cs",
              type: "file",
            },
            {
              id: "binary-tree",
              name: "Binary-Tree-Traversal.cs",
              type: "file",
            },
          ],
        },
        {
          id: "hard",
          name: "Hard",
          type: "folder",
          children: [
            {
              id: "graph-problem",
              name: "Graph-Problem.cs",
              type: "file",
            },
          ],
        },
      ],
    },
    {
      id: "hackerrank",
      name: "HackerRank",
      type: "folder",
      children: [
        {
          id: "algorithms",
          name: "Algorithms",
          type: "folder",
          children: [
            {
              id: "array-manipulation",
              name: "Array-Manipulation.cs",
              type: "file",
            },
          ],
        },
      ],
    },
    {
      id: "readme",
      name: "README.md",
      type: "file",
    },
  ];

  const toggleFolder = (id) => {
    setExpanded((previous) => ({
      ...previous,
      [id]: !previous[id],
    }));
  };

  const selectItem = (item, path) => {
    setSelectedItem({
      ...item,
      path,
    });
  };

  const TreeItem = ({ item, path = "" }) => {
    const currentPath = path
      ? `${path}/${item.name}`
      : item.name;

    const isFolder = item.type === "folder";
    const isExpanded = expanded[item.id];
    const isSelected = selectedItem?.id === item.id;

    return (
      <div>
        <button
          type="button"
          onClick={() => {
            if (isFolder) {
              toggleFolder(item.id);
            }

            selectItem(item, currentPath);
          }}
          className={`group flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm transition ${
            isSelected
              ? "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400"
              : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          }`}
        >
          <span className="flex h-4 w-4 shrink-0 items-center justify-center">
            {isFolder &&
              (isExpanded ? (
                <ChevronDown size={15} />
              ) : (
                <ChevronRight size={15} />
              ))}
          </span>

          {isFolder ? (
            isExpanded ? (
              <FolderOpen
                size={17}
                className="shrink-0 text-amber-500"
              />
            ) : (
              <Folder
                size={17}
                className="shrink-0 text-amber-500"
              />
            )
          ) : (
            <FileCode2
              size={17}
              className="shrink-0 text-blue-500"
            />
          )}

          <span className="truncate">
            {item.name}
          </span>
        </button>

        {isFolder &&
          isExpanded &&
          item.children?.length > 0 && (
            <div className="ml-5 border-l border-slate-200 pl-2 dark:border-slate-800">
              {item.children.map((child) => (
                <TreeItem
                  key={child.id}
                  item={child}
                  path={currentPath}
                />
              ))}
            </div>
          )}
      </div>
    );
  };

  const openDeleteConfirmation = (target) => {
    setDeleteTarget(target);
  };

  const closeDeleteConfirmation = () => {
    setDeleteTarget(null);
  };

  const confirmDelete = () => {
    // GitHub API deletion logic will be added later.

    setDeleteTarget(null);
    setSelectedItem(null);
  };

  return (
    <>
      <section className="rounded-2xl border border-red-200 bg-white p-4 shadow-sm dark:border-red-900/50 dark:bg-slate-900 sm:p-5 lg:p-6">
        {/* Danger Zone Header */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400">
            <AlertTriangle size={20} />
          </div>

          <div className="min-w-0">
            <h2 className="text-base font-semibold text-red-600 dark:text-red-400">
              Danger Zone
            </h2>

            <p className="mt-1 text-sm leading-5 text-slate-500 dark:text-slate-400">
              Permanently delete GitHub repositories, folders or files.
              Deleted content may not be recoverable.
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-5">
          {/* =====================================================
              DELETE REPOSITORY
          ====================================================== */}
          <div className="rounded-xl border border-red-200 p-4 dark:border-red-900/50">
            {/* Header */}
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500 dark:bg-red-500/10 dark:text-red-400">
                <SiGithub size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Delete Repository
                </p>

                <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Permanently delete an entire GitHub repository and
                  everything inside it.
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
              {/* Repository Select */}
              <div className="relative min-w-0 flex-1 sm:max-w-xs">
                <select
                  value={repository}
                  onChange={(e) => setRepository(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-red-300 bg-white px-3 py-2 pr-9 text-sm text-slate-700 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/10 dark:border-red-900/70 dark:bg-slate-950 dark:text-slate-300 dark:focus:border-red-500"
                >
                  {repositories.map((repo) => (
                    <option key={repo} value={repo}>
                      {repo}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={15}
                  strokeWidth={2}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400"
                />
              </div>

              {/* Compact Delete Button */}
              <button
                type="button"
                onClick={() =>
                  openDeleteConfirmation({
                    type: "repository",
                    name: repository,
                    path: repository,
                  })
                }
                className="inline-flex h-8.5 shrink-0 items-center justify-center gap-2 rounded-lg bg-red-500 px-3.5 text-xs font-semibold text-white transition hover:bg-red-600 active:bg-red-700"
              >
                <Trash2 size={15} />
                <span>Delete Repository</span>
              </button>
            </div>
          </div>

          {/* =====================================================
              DELETE REPOSITORY CONTENT
          ====================================================== */}
          <div className="rounded-xl border border-red-200 p-4 dark:border-red-900/50">
            <div className="mb-4">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                Delete Repository Content
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Browse the repository tree and delete any folder,
                sub-folder or individual file.
              </p>
            </div>

            {/* Repository Selector */}
            <div className="mb-4">
              <label className="mb-2 block text-xs font-medium text-slate-600 dark:text-slate-400">
                Repository
              </label>

              <div className="relative">
                <select
                  value={repository}
                  onChange={(e) => {
                    setRepository(e.target.value);
                    setSelectedItem(null);
                  }}
                  className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 pr-9 text-sm text-slate-700 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                >
                  {repositories.map((repo) => (
                    <option key={repo} value={repo}>
                      {repo}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400"
                />
              </div>
            </div>

            {/* File Tree */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-2 flex items-center gap-2 border-b border-slate-200 px-2.5 py-2 text-xs font-medium text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <Folder size={15} />
                <span className="truncate">
                  {repository}
                </span>
              </div>

              <div className="max-h-72 overflow-y-auto pr-1">
                {fileTree.map((item) => (
                  <TreeItem
                    key={item.id}
                    item={item}
                  />
                ))}
              </div>
            </div>

            {/* Selected Item */}
            <div className="mt-4 flex flex-col gap-3 rounded-xl border border-red-200 bg-red-50 p-3 dark:border-red-900/50 dark:bg-red-500/5 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-xs font-medium text-red-600 dark:text-red-400">
                  {selectedItem
                    ? "Selected for deletion"
                    : "No item selected"}
                </p>

                <p
                  className={`mt-1 truncate font-mono text-xs ${
                    selectedItem
                      ? "text-slate-600 dark:text-slate-400"
                      : "text-slate-400 dark:text-slate-600"
                  }`}
                >
                  {selectedItem
                    ? `${repository}/${selectedItem.path}`
                    : "Select a folder or file from the tree"}
                </p>
              </div>

              {/* Always Visible */}
              <button
                type="button"
                disabled={!selectedItem}
                onClick={() => {
                  if (!selectedItem) return;

                  openDeleteConfirmation({
                    type: selectedItem.type,
                    name: selectedItem.name,
                    path: `${repository}/${selectedItem.path}`,
                  });
                }}
                className="inline-flex h-8.5 shrink-0 items-center justify-center gap-2 rounded-lg px-3.5 text-xs font-semibold transition disabled:cursor-not-allowed disabled:border disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 enabled:bg-red-500 enabled:text-white enabled:hover:bg-red-600 dark:disabled:border-slate-800 dark:disabled:bg-slate-950 dark:disabled:text-slate-600"
              >
                <Trash2 size={15} />
                Delete Selected
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          DELETE CONFIRMATION MODAL
      ========================================================== */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl dark:border-slate-800 dark:bg-slate-900 sm:p-6">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400">
                  <AlertTriangle size={20} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Confirm Deletion
                  </h3>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    This action cannot be undone.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeDeleteConfirmation}
                className="shrink-0 rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
              >
                <X size={18} />
              </button>
            </div>

            {/* Target */}
            <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-3 dark:border-red-900/50 dark:bg-red-500/5">
              <p className="text-xs font-medium uppercase tracking-wide text-red-500">
                {deleteTarget.type === "repository"
                  ? "Repository"
                  : deleteTarget.type === "folder"
                    ? "Folder"
                    : "File"}
              </p>

              <p className="mt-1 break-all font-mono text-sm text-slate-700 dark:text-slate-300">
                {deleteTarget.path}
              </p>
            </div>

            {/* Warning */}
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {deleteTarget.type === "repository"
                ? "The entire repository and all of its files, folders, branches and history will be permanently deleted."
                : deleteTarget.type === "folder"
                  ? "The selected folder and all nested folders and files inside it will be permanently deleted."
                  : "The selected file will be permanently deleted from the repository."}
            </p>

            {/* Actions */}
            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={closeDeleteConfirmation}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={confirmDelete}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
              >
                <Trash2 size={15} />
                Permanently Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DangerZone;