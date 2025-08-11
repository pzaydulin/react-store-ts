import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="hover:text-muted_foreground active:text-primary"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open && (
        <div className="absolute right-0 top-12 border border-border bg-popover text-popover_foreground shadow-md rounded-md w-48 z-40">
          <ul className="flex flex-col p-4 gap-3 text-sm z-50">
            {navItems.map(({ label, path, icon: Icon }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 focus-within:bg-accent focus-within:text-accent_foreground  active:text-muted_foreground transition"
                >
                  <Icon fontSize="small" />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
