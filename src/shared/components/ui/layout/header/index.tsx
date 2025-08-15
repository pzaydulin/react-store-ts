import React from "react";

import Logo from "@app/layout/header/Logo";
import NavMain from "@app/layout/header/NavMain";
import NavUtility from "@app/layout/header/NavUtility";

export const Header: React.FC = () => {
  return (
    <>
      <Logo />
      <NavMain />
      <NavUtility />
    </>
  );
};
