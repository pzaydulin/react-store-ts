import "@app/App.css";
import AppRoutes from "@app/AppRoutes";
import { AuthProvider } from "@app/core/contexts/AuthContext";
import { ThemeProvider } from "@app/core/contexts/ThemeContext";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
}
