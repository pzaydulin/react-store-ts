import { useTheme } from "@app/components/ThemeContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
    </button>
  );
};
