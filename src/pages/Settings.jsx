import SettingsHeader from "../components/settings/SettingsHeader";
import GitHubConnection from "../components/settings/GitHubConnection";
import SyncSettings from "../components/settings/SyncSettings";
import SolutionOrganization from "../components/settings/SolutionOrganization";
import DangerZone from "../components/settings/DangerZone";

function Settings() {
  return (
    <div className="min-h-full w-full bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto w-full max-w-[1800px] space-y-5 p-4 sm:p-5 lg:p-6 xl:p-8">
        <SettingsHeader />

        <div className="grid gap-5 xl:grid-cols-2">
          <GitHubConnection />
          <SyncSettings />
          <SolutionOrganization />
          <DangerZone />
        </div>
      </div>
    </div>
  );
}

export default Settings;