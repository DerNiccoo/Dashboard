import Dashboard from "@material-ui/icons/Dashboard";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";

import DashboardPage from "./views/Dashboard.js";
import RevenuePage from "./views/Revenue.js";
import ExpenditurePage from "./views/Expenditure.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
  },
  {
    path: "/revenue",
    name: "Einnahmen",
    icon: EuroSymbolIcon,
    component: RevenuePage,
  },
  {
    path: "/expenditure",
    name: "Ausgaben",
    icon: EuroSymbolIcon,
    component: ExpenditurePage,
  },
];

export default dashboardRoutes;
