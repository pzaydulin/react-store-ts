import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CategoryIcon from "@mui/icons-material/Category";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/", icon: HomeIcon },
  { label: "Products", path: "/products", icon: StorefrontIcon },
  { label: "Categories", path: "/categories", icon: CategoryIcon },
  { label: "Account", path: "/account", icon: AccountCircleIcon },
];

const NavMain: React.FC = () => {
  return (
    <nav className="hidden md:flex gap-6 text-sm font-medium ">
      {navItems.map(({ label, path, icon: Icon }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive
                ? "text-primary border-b-2 border-primary pb-1"
                : "hover:text-muted_foreground active:text-primary transition"
            }`
          }
        >
          <Icon fontSize="small" />
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavMain;
