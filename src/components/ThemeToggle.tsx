import { useTheme } from "@app/components/ThemeContext";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Current theme: {theme}</button>;
};
