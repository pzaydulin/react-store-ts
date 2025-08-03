import { useNavigate } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ModalDialog from "@app/shared/components/ModalDialog";
import { useState } from "react";

export const LogOut: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        <LogoutOutlinedIcon />
      </button>

      <ModalDialog
        open={open}
        onOpenChange={setOpen}
        title="Confirm Logout"
        description="Are you sure you want to log out?"
        buttonClose={{
          title: "Cancel",
          onClick: () => setOpen(false),
        }}
        buttonConfirm={{
          title: "Log out",
          onClick: () => {
            localStorage.removeItem("token");
            setOpen(false);
            navigate("/login", { replace: true });
          },
        }}
      />
    </>
  );
};
