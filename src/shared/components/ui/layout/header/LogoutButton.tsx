import { useNavigate } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ModalDialog from "@app/shared/components/ModalDialog";
import { useState } from "react";
import { useAuth } from "@app/core/contexts/AuthContext";
import { Navigation } from "@mui/icons-material";
import { NavigationPath } from "@app/core/constants/navigation";

export const LogOutButton: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hover:text-muted_foreground active:text-primary"
      >
        <LogoutOutlinedIcon />
      </button>
      <ModalDialog
        open={open}
        onOpenChange={setOpen}
        title="Confirm Logout"
        buttonClose={{
          title: "Cancel",
          onClick: () => setOpen(false),
        }}
        buttonConfirm={{
          title: "Log out",
          onClick: () => {
            logout(); // Call logout from AuthContext
            setOpen(false);
            navigate(NavigationPath.Home);
          },
        }}
      >
        Are you sure you want to log out?
      </ModalDialog>
    </>
  );
};
