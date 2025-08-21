import { NavigationPath } from "@app/core/constants/navigation";
import React from "react";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { useNavigate } from "react-router-dom";
import ToolTip from "@app/shared/components/ToolTip";

const LogInButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <ToolTip text="Log In">
        <button
          className="hover:text-muted_foreground active:text-primary"
          onClick={() => navigate(NavigationPath.Login)}
        >
          <LoginOutlinedIcon />
        </button>
      </ToolTip>
    </>
  );
};

export default LogInButton;
