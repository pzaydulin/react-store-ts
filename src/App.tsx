import "@app/App.css";
import AppRoutes from "@app/AppRoutes";
import { AuthProvider } from "@app/core/contexts/AuthContext";
import { ThemeProvider } from "@app/core/contexts/ThemeContext";
import { CartProvider } from "@app/core/contexts/CartContext";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  );
}
