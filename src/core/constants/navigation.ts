import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CategoryIcon from "@mui/icons-material/Category";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export enum NavigationPath {
  Home = "/",
  Products = "/products",
  Cart = "/cart",
  Account = "/account",
  Login = "/login",
}

export const navItems = [
  { label: "Home", path: "/", icon: HomeIcon, no_auth: true },
  {
    label: "Products",
    path: "/products",
    icon: StorefrontIcon,
    no_auth: true,
  },
  {
    label: "Categories",
    path: "/categories",
    icon: CategoryIcon,
    no_auth: true,
  },
  {
    label: "Account",
    path: "/account",
    icon: AccountCircleIcon,
    no_auth: false,
  },
];
