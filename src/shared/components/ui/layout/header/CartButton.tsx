import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const CartButton: React.FC = () => {
  return (
    <button className="hover:text-muted_foreground active:text-primary">
      <ShoppingCartOutlinedIcon />
    </button>
  );
};
