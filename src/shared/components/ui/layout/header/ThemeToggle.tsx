import { useTheme } from "@app/core/contexts/ThemeContext";
import ToolTip from "@app/shared/components/ToolTip";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <ToolTip text="Toggle Theme">
      <button
        className="hover:text-muted_foreground active:text-primary"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon />
        )}
      </button>
    </ToolTip>
  );
};
