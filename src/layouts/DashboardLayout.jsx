import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import { LayoutDashboard, CheckSquare, BarChart2, Server, FolderGit2, Activity, Zap, Settings, Globe, BriefcaseBusiness, Code2, Menu, X } from "lucide-react";

import { useTheme } from "../hooks/useTheme";
import { ThemeButton } from "../components/Button";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Problems", href: "/problems", icon: CheckSquare },
  { name: "Analytics", href: "/analytics", icon: BarChart2 },
  { name: "Platforms", href: "/platforms", icon: Server },
  { name: "Repositories", href: "/repositories", icon: FolderGit2 },
  { name: "Activity", href: "/activity", icon: Activity },
  { name: "Performance", href: "/performance", icon: Zap },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function DashboardLayout() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const [username, setUsername] = useState("AlokSDE");

  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setSidebarCollapsed(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentPage =
    navigation.find((item) => item.href === location.pathname)?.name ?? "Dashboard";

  return (
    <div className="mx-auto flex h-screen w-full max-w-screen-2xl overflow-hidden bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">

      {/* Sidebar */}
      <aside className={`relative flex shrink-0 flex-col border-r border-slate-300 bg-white transition-[width] duration-200 dark:border-slate-800 dark:bg-slate-900 ${sidebarCollapsed ? "w-16" : "w-64"}`}>

        {/* Brand */}
        <div className={`flex h-15 items-center border-b border-slate-200 dark:border-slate-800 ${sidebarCollapsed ? "justify-center px-2" : "px-4"}`}>
          <div className="flex min-w-0 items-center gap-3">

            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-pink-500 via-purple-500 to-cyan-400 text-base font-bold text-white shadow-sm">
              {"{ }"}
            </div>

            {!sidebarCollapsed && (
              <div className="min-w-0">
                <h1 className="text-lg font-bold leading-tight">
                  CodeSync
                </h1>

                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Built for Better Code
                </p>
              </div>
            )}

          </div>

          {/* Sidebar Close */}
          {!sidebarCollapsed && (
            <button
              type="button"
              onClick={() => setSidebarCollapsed(true)}
              title="Collapse sidebar"
              aria-label="Collapse sidebar"
              className="ml-auto inline-flex shrink-0 items-center justify-center rounded-lg p-2 text-slate-500 transition-colors hover:bg-fuchsia-500/10 hover:text-fuchsia-600 dark:text-slate-400 dark:hover:bg-fuchsia-500/10 dark:hover:text-fuchsia-400"
            >
              <X className="size-5" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className={`flex-1 space-y-1 overflow-y-auto py-4 ${sidebarCollapsed ? "px-2" : "px-3"}`}>
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.href}
                end={item.href === "/"}
                title={sidebarCollapsed ? item.name : undefined}
                className={({ isActive }) => `flex items-center rounded-lg py-2.5 text-sm font-medium transition-colors ${sidebarCollapsed ? "justify-center px-2" : "gap-3 px-3"} ${isActive ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-200"}`}
              >
                <Icon className="size-5 shrink-0" />
                {!sidebarCollapsed && <span>{item.name}</span>}
              </NavLink>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="border-t border-slate-200 p-2 dark:border-slate-800">
          <div className={`flex items-center rounded-lg p-2 ${sidebarCollapsed ? "justify-center" : "gap-3"}`}>

            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-purple-500 text-sm font-bold text-white shadow-sm">
              {username?.charAt(0).toUpperCase() || "U"}
            </div>

            {!sidebarCollapsed && (
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {username || "User"}
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  GitHub Account
                </p>
              </div>
            )}

          </div>
        </div>

      </aside>

      {/* Main */}
      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">

        {/* Header */}
        <header className="flex h-15 shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-white/90 px-3 backdrop-blur-sm md:px-5 lg:px-8 dark:border-slate-800 dark:bg-slate-900/80">

          {/* Header Left */}
          <div className="flex min-w-0 items-center gap-2">

            {/* Sidebar Menu */}
            {sidebarCollapsed && (
              <button
                type="button"
                onClick={() => setSidebarCollapsed(false)}
                title="Expand sidebar"
                aria-label="Expand sidebar"
                className="inline-flex shrink-0 items-center justify-center rounded-lg p-2 text-slate-600 transition-colors hover:bg-cyan-500/10 hover:text-cyan-600 dark:text-slate-300 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-400"
              >
                <Menu className="size-5" />
              </button>
            )}

            {/* Current Page */}
            <h2 className="truncate text-base font-semibold md:text-lg">
              {currentPage}
            </h2>

          </div>

          {/* Header Actions */}
          <div className="flex shrink-0 items-center gap-1 md:gap-2">

            {/* Theme */}
            <ThemeButton theme={theme} toggleTheme={toggleTheme} />

            {/* Portfolio */}
            <a
              href="https://aloksde.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Portfolio"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-2 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-700 md:px-3 md:text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-violet-500/50 dark:hover:bg-violet-500/10 dark:hover:text-violet-300"
            >
              <Globe className="size-4 shrink-0" />
              <span>Portfolio</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/alokmauryaofficial"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-2 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-sky-400/50 hover:bg-sky-500/10 hover:text-sky-700 md:px-3 md:text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-sky-500/50 dark:hover:bg-sky-500/10 dark:hover:text-sky-300"
            >
              <BriefcaseBusiness className="size-4 shrink-0" />
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/byteAlok"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-2 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-slate-500/60 hover:bg-slate-500/10 hover:text-slate-900 md:px-3 md:text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-500/60 dark:hover:bg-slate-500/10 dark:hover:text-white"
            >
              <Code2 className="size-4 shrink-0" />
              <span>GitHub</span>
            </a>

          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="mx-auto max-w-6xl">
            <Outlet />
          </div>
        </div>

      </main>
    </div>
  );
}