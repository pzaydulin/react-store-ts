import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CategoryIcon from "@mui/icons-material/Category";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export enum NavigationPath {
  Home = "/",
  Products = "/products",
  Categories = "/categories",
  Cart = "/cart",
  Account = "/account",
  Login = "/login",
}

export const navItems = [
  {
    label: "Home",
    path: NavigationPath.Home,
    icon: HomeIcon,
    no_auth: true,
  },
  {
    label: "Products",
    path: NavigationPath.Products,
    icon: StorefrontIcon,
    no_auth: true,
  },
  {
    label: "Categories",
    path: NavigationPath.Categories,
    icon: CategoryIcon,
    no_auth: true,
  },
  {
    label: "Account",
    path: NavigationPath.Account,
    icon: AccountCircleIcon,
    no_auth: false,
  },
];
