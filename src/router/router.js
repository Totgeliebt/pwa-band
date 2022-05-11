import AddNewApp from "../pages/AddNewApp";
import FirstPage from "../pages/FirstPage/FirstPage";
import PwaPage from "../pages/PWApage/PWAPage";
import StatisticsByWeek from "../pages/Statistics/StatisticsByWeek/StatisticsByWeek";
import EditPage from "../pages/EditPage/EditPage";
import StatisticsByDay from "../pages/Statistics/StatisticsByDay/StatisticsByDay";
import StatisticsByMonth from "../pages/Statistics/StatisticsByMonth/StatisticsByMonth";


export const privateRoutes = [
  {path: '/',component: FirstPage},
  {path: '/preview',component: PwaPage},
  {path: '/statisticsByWeek',component: StatisticsByWeek},
  {path: '/statisticsByDay',component: StatisticsByDay},
  {path: '/statisticsByMonth',component: StatisticsByMonth},
  {path: '/editing',component: EditPage},
  {path: '/newPwa',component: AddNewApp},
]