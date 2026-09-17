import React, { useState } from 'react'
import { useTheme } from "../hooks/useTheme";
import { ThemeButton } from "../components/Button";
import { CheckCircle2, TrendingUp, GitBranch, ExternalLink, Unplug, Globe, BriefcaseBusiness, Code2 } from "lucide-react";
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
    <div className="w-86 bg-slate-100 p-5 text-slate-900 dark:bg-slate-950 dark:text-slate-100">

      <div className="mb-6 flex items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-purple-500 text-base font-bold text-white">
          {'{ }'}
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-between">
          <div className="min-w-0">
            <h1 className="text-lg font-bold leading-tight">CodeSync</h1>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">Built for Better Code</p>
          </div>

          <ThemeButton theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-slate-300 bg-slate-50 p-3 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <CheckCircle2 className="mx-auto mb-1 size-4 text-green-500" />
          <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{totalSolved}</p>
          <p className="text-[10px] font-medium uppercase text-slate-600 dark:text-slate-500">Solved</p>
        </div>

        <div className="rounded-lg border border-slate-300 bg-slate-50 p-3 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <TrendingUp className="mx-auto mb-1 size-4 text-blue-500" />
          <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{streak}</p>
          <p className="text-[10px] font-medium uppercase text-slate-600 dark:text-slate-500">Day Streak</p>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between gap-2 rounded-lg border border-slate-300 bg-slate-50 p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
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
            <p className="mt-1 flex items-center gap-1.5 text-[10px] font-medium text-slate-600 dark:text-slate-400">
              <SiGithub className="size-3" />
              <span>Not connected</span>
            </p>
          )}
        </div>

        {!isConnected && (
          <button
            // onClick={connectGitHub}
            className="inline-flex shrink-0 items-center justify-center gap-1 rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-600 transition-colors hover:border-cyan-500/60 hover:bg-cyan-500/15 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
          >
            <GitBranch className="size-3" />
            Connect
          </button>
        )}

        {isConnected && (
          <button
            // onClick={disconnectGitHub}
            className="inline-flex shrink-0 items-center justify-center gap-1 rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-red-400/60 hover:bg-red-500/10 hover:text-red-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-red-500/50 dark:hover:text-red-400"
          >
            <Unplug className="size-3" />
            Disconnect
          </button>
        )}
      </div>

      <button
        onClick={openDashboard}
        className="group flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10 hover:text-fuchsia-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-fuchsia-500/50 dark:hover:bg-fuchsia-500/10 dark:hover:text-fuchsia-300"
      >
        <span>Open Dashboard</span>
        <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>

      <div className="mt-4 flex items-center justify-center gap-2 border-t border-slate-200 pt-4 dark:border-slate-800">
        <a href="https://aloksde.com" target="_blank" rel="noopener noreferrer" title="Portfolio" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-violet-500/50 dark:hover:bg-violet-500/10 dark:hover:text-violet-300">
          <Globe className="size-3.5" />
          Portfolio
        </a>

        <a href="https://linkedin.com/in/alokmauryaofficial" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-sky-400/50 hover:bg-sky-500/10 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-sky-500/50 dark:hover:bg-sky-500/10 dark:hover:text-sky-300">
          <BriefcaseBusiness className="size-3.5" />
          LinkedIn
        </a>

        <a href="https://github.com/byteAlok" target="_blank" rel="noopener noreferrer" title="GitHub" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-slate-500/60 hover:bg-slate-500/10 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-500/60 dark:hover:bg-slate-500/10 dark:hover:text-white">
          <Code2 className="size-3.5" />
          GitHub
        </a>
      </div>

    </div>
  
)}

export default function App() {
  return <Popup />
};
