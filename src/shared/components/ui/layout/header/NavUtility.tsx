import React from "react";
import { LogOutButton } from "@app/layout/header/LogoutButton";
import { ThemeToggle } from "@app/layout/header/ThemeToggle";
import { CartButton } from "@app/layout/header/CartButton";
import MobileNav from "@app/layout/header/MobileNav";
import { useAuth } from "@app/core/contexts/AuthContext";
import LogInButton from "./LoginButton";

const NavUtility: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div
      role="group"
      aria-label="Logout and theme toggle"
      className="flex items-center gap-2 transition"
    >
      <MobileNav />
      <ThemeToggle />
      <CartButton />
      {isAuthenticated ? <LogOutButton /> : <LogInButton />}
    </div>
  );
};

export default NavUtility;
