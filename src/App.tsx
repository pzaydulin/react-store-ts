import "@app/App.css";
import LoginPage from "./pages/Login";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import RequireAuth from "./quards/RequireAuth";
import MasterLayout from "./shared/components/Layout";
import ListProductsPage from "./pages/ListProducts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <RequireAuth>
              <MasterLayout>
                <LoginPage />
              </MasterLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/products"
          element={
            <RequireAuth>
              <MasterLayout>
                <ListProductsPage />
              </MasterLayout>
            </RequireAuth>
          }
        />
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
