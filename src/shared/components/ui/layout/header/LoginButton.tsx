import { NavigationPath } from "@app/core/constants/navigation";
import React from "react";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { useNavigate } from "react-router-dom";

const LogInButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="hover:text-muted_foreground active:text-primary"
        onClick={() => navigate(NavigationPath.Login)}
        title="LogIn"
      >
        <LoginOutlinedIcon />
      </button>
    </>
  );
};

export default LogInButton;
