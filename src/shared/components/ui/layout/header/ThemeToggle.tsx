import { useTheme } from "@app/core/contexts/ThemeContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="hover:text-muted_foreground active:text-primary"
      onClick={toggleTheme}
    >
      {theme === "light" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
    </button>
  );
};
