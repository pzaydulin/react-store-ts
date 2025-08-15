import { NavigationPath } from "@app/core/constants/navigation";
import HomePage from "@app/pages/Home";
import ProductsListPage from "@app/pages/ProductsList";
import LoginPage from "@app/pages/Login";
import AccountPage from "@app/pages/Account";
import CategoriesPage from "./pages/Categories";

interface IRoutes {
  path: string;
  Component: React.ComponentType;
}

export const publicRoutes: IRoutes[] = [
  {
    path: NavigationPath.Home,
    Component: HomePage,
  },
  {
    path: NavigationPath.Products,
    Component: ProductsListPage,
  },
  {
    path: NavigationPath.Categories,
    Component: CategoriesPage,
  },
  {
    path: NavigationPath.Login,
    Component: LoginPage,
  },
];

export const authRoutes: IRoutes[] = [
  {
    path: NavigationPath.Account,
    Component: AccountPage,
  },
];
