import { createBrowserRouter } from "react-router";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Problems from "./pages/Problems";
import Analytics from "./pages/Analytics";
import Platforms from "./pages/Platforms";
import Repositories from "./pages/Repositories";
import Activity from "./pages/Activity";
import Performance from "./pages/Performance";
import Settings from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/", Component: DashboardLayout,

    children: [
      { index: true, Component: Dashboard, },
      { path: "problems", Component: Problems, },
      { path: "analytics", Component: Analytics, },
      { path: "platforms", Component: Platforms, },
      { path: "repositories", Component: Repositories, },
      { path: "activity", Component: Activity, },
      { path: "performance", Component: Performance, },
      { path: "settings", Component: Settings, },
    ],
  },
],
  {
    basename: "/index.html",
  }
);
