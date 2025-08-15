import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RequireAuth from "@app/core/quards/RequireAuth";
import MasterLayout from "@app/shared/components/ui/layout/Layout";
import LoginPage from "@app/pages/Login";
import ProductsListPage from "@app/pages/ProductsList";
import { useAuth } from "@app/core/contexts/AuthContext";
import { authRoutes, publicRoutes } from "./routes";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated &&
          authRoutes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <RequireAuth>
                  <MasterLayout>
                    <Component />
                  </MasterLayout>
                </RequireAuth>
              }
            />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <MasterLayout>
                <Component />
              </MasterLayout>
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
