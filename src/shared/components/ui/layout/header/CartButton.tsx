import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ToolTip from "@app/shared/components/ToolTip";
import { useNavigate } from "react-router-dom";
import { NavigationPath } from "@app/core/constants/navigation";
import CartBadge from "@app/components/CartBadge";

export const CartButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ToolTip text="Cart">
      <div className="relative">
        <button
          className="hover:text-muted_foreground active:text-primary"
          onClick={() => navigate(NavigationPath.Cart)}
        >
          <ShoppingCartOutlinedIcon />
        </button>
        <CartBadge />
      </div>
    </ToolTip>
  );
};
