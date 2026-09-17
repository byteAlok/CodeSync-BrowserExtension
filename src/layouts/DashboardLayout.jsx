import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import { LayoutDashboard, CheckSquare, BarChart2, Server, FolderGit2, Activity, Zap, Settings, ExternalLink, } from "lucide-react";

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

  const currentPage =
    navigation.find((item) => item.href === location.pathname)?.name ?? "Dashboard";

  return (
    <div className="mx-auto flex h-screen w-full max-w-screen-2xl overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Sidebar */}
      <aside className="flex w-64 shrink-0 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">

        {/* Brand */}
        <div className="flex h-15 items-center border-b border-slate-200 px-4 dark:border-slate-800">
          <div className="flex items-center gap-3">

            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-purple-500 text-base font-bold text-white">
              {"{ }"}
            </div>

            <div className="min-w-0">
              <h1 className="text-lg font-semibold leading-tight">
                CodeSync
              </h1>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Built for Better Code
              </p>
            </div>

          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink key={item.name} to={item.href} end={item.href === "/"} className={({ isActive }) => `flex items-center gap-3 -lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400" : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50"}`}>
                <Icon className="size-5 shrink-0" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
        {/* User Profile */}
        <div className="border-t border-slate-800 p-2">
          <div className="flex items-center gap-3 rounded-lg p-2">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-500 text-sm font-bold text-white">
              {username?.charAt(0).toUpperCase() || "U"}
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-100">
                {username || "User"}
              </p>
              <p className="text-xs text-slate-400">GitHub Account</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">

        {/* Header */}
        <header className="flex h-15 shrink-0 items-center justify-between border-b border-slate-200 bg-white/80 px-8 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">

          {/* Current Page */}
          <h2 className="text-lg font-semibold"> {currentPage} </h2>

          {/* Header Actions */}
          <div className="flex items-center gap-3">

            {/* Theme */}
            <ThemeButton theme={theme} toggleTheme={toggleTheme} />

            {/* Portfolio */}
            <a href="https://aloksde.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white">
              <span>Portfolio</span>
              <ExternalLink className="size-4" />
            </a>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="mx-auto max-w-6xl">
            <Outlet />
          </div>
        </div>

      </main>
    </div>
  );
}