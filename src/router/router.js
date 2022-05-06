import AddNewApp from "../pages/AddNewApp";
import FirstPage from "../pages/FirstPage/FirstPage";
import PwaPage from "../pages/PWApage/PWAPage";
import StatisticsByWeek from "../pages/Statistics/StatisticsByWeek/StatisticsByWeek";
import EditPage from "../pages/Statistics/EditPage/EditPage";


export const privateRoutes = [
  {path: '/',component: FirstPage},
  {path: '/preview',component: PwaPage},
  {path: '/statistics',component: StatisticsByWeek},
  {path: '/editing',component: EditPage},
  {path: '/newPwa',component: AddNewApp},
]