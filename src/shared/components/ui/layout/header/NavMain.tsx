import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "@app/core/contexts/AuthContext";
import { navItems } from "@app/core/constants/navigation";

const NavMain: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="hidden md:flex gap-6 text-sm font-medium ">
      {navItems
        .filter((item) => item.no_auth || isAuthenticated)
        .map(({ label, path, icon: Icon }) => (
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
