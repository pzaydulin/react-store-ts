import { NavigationPath } from "@app/core/constants/navigation";
import HomePage from "@app/pages/Home";
import LoginPage from "@app/pages/Login";
import AccountPage from "@app/pages/Account";
import CategoriesPage from "@app/pages/Categories";
import ProductsPage from "@app/pages/Products";
import ProductPage from "@app/pages/Product";
import CartPage from "./pages/Cart";

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
    Component: ProductsPage,
  },
  {
    path: NavigationPath.Categories,
    Component: CategoriesPage,
  },
  {
    path: NavigationPath.ProductsCategory,
    Component: ProductsPage,
  },
  {
    path: NavigationPath.Product,
    Component: ProductPage,
  },
  {
    path: NavigationPath.Cart,
    Component: CartPage,
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
