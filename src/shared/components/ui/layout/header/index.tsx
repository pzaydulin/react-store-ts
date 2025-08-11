import React from "react";

import Logo from "@app/layout/header/Logo";
import NavMain from "@app/layout/header/NavMain";
import NavUtility from "@app/layout/header/NavUtility";
import { useAuth } from "@app/core/contexts/AuthContext";

export const Header: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Logo />
      {isAuthenticated && <NavMain />}
      <NavUtility />
    </>
  );
};
