import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { NavLink } from "react-router-dom";
import { useAuth } from "@app/core/contexts/AuthContext";
import { navItems } from "@app/core/constants/navigation";

export default function MobileNav() {
  const { isAuthenticated } = useAuth();

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
            {navItems
              .filter((item) => item.no_auth || isAuthenticated)
              .map(({ label, path, icon: Icon }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-2 ${
                        isActive
                          ? "text-primary font-semibold"
                          : "active:text-muted_foreground transition"
                      }`
                    }
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
