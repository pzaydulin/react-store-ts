import React from "react";
import { LogOut } from "@app/layout/header/Logout";
import { ThemeToggle } from "@app/layout/header/ThemeToggle";
import { CartButton } from "@app/layout/header/CartButton";
import MobileNav from "@app/layout/header/MobileNav";
import { useAuth } from "@app/core/contexts/AuthContext";

const NavUtility: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div
      role="group"
      aria-label="Logout and theme toggle"
      className="flex items-center gap-2 transition"
    >
      {isAuthenticated && <MobileNav />}
      <ThemeToggle />
      {isAuthenticated && (
        <>
          <CartButton />
          <LogOut />
        </>
      )}
    </div>
  );
};

export default NavUtility;
