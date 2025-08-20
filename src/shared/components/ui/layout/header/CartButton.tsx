import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ToolTip from "@app/shared/components/ToolTip";

export const CartButton: React.FC = () => {
  return (
    <ToolTip text="Cart">
      <button className="hover:text-muted_foreground active:text-primary">
        <ShoppingCartOutlinedIcon />
      </button>
    </ToolTip>
  );
};
