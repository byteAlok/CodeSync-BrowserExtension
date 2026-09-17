import React, { useState } from 'react'
import { useTheme } from "../hooks/useTheme";
import { ThemeButton } from "../components/Button";
import { CheckCircle2, TrendingUp, GitBranch, ExternalLink, Unplug } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

function Popup() {
  const { theme, toggleTheme } = useTheme();

  const [totalSolved, setTotalSolved] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isConnected, setIsConnected] = useState(true);
  const [username, setUsername] = useState('Unknown');

  const openDashboard = () => {
    if (typeof chrome !== 'undefined' && chrome.tabs) {
      chrome.tabs.create({ url: '/index.html' });
    } else {
      window.open('/index.html', '_blank');
    }
  };

  return (
    <div className="w-[320px] bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-4 border border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 shrink-0 rounded-lg bg-linear-to-br from-blue-600 to-purple-500 flex items-center justify-center text-white font-bold">
          {'{ }'}
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-between">
          <div className="min-w-0">
            <h1 className="text-lg font-bold leading-tight">CodeSync</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">Built for Better Code</p>
          </div>

          <ThemeButton theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 text-center shadow-sm">
          <CheckCircle2 className="w-4 h-4 text-green-500 mx-auto mb-1" />
          <p className="text-lg font-bold">{totalSolved}</p>
          <p className="text-[10px] font-medium text-slate-500 uppercase">Solved</p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 text-center shadow-sm">
          <TrendingUp className="w-4 h-4 text-blue-500 mx-auto mb-1" />
          <p className="text-lg font-bold">{streak}</p>
          <p className="text-[10px] font-medium text-slate-500 uppercase">Day Streak</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white p-3 mb-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            GitHub Status
          </p>

          {isConnected ? (
            <p className="mt-1 flex items-center gap-1.5 text-[10px] font-medium text-green-500">
              <SiGithub className="size-3" />
              <span className="truncate">@{username}</span>
            </p>
          ) : (
            <p className="mt-1 flex items-center gap-1.5 text-[10px] font-medium text-slate-500 dark:text-slate-400">
              <SiGithub className="size-3" />
              <span>Not connected</span>
            </p>
          )}
        </div>

        {!isConnected && (
          <button
            // onClick={connectGitHub}
            className="inline-flex shrink-0 items-center justify-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-500 transition-colors hover:border-cyan-500/50 hover:bg-cyan-500/15 hover:text-cyan-400"
          >
            <GitBranch className="size-3" />
            Connect
          </button>
        )} 

        {isConnected && (
          <button
            // onClick={disconnectGitHub}
            className="inline-flex shrink-0 items-center justify-center gap-1 rounded-lg border border-slate-700 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400"
          >
            <Unplug className="size-3" />
            Disconnect
          </button>
        )}
      </div>

      <button
        onClick={openDashboard}
        className="group flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:hover:text-white">
        <span>Open Dashboard</span>
        <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </div>
  )
}

export default function App() {
  return <Popup />
};
