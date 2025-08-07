import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListProductsPage from "@app/pages/ListProducts";
import LoginPage from "@app/pages/Login";
import RequireAuth from "@app/core/quards/RequireAuth";
import MasterLayout from "@app/shared/components/Layout";

const AppRoutes = () => {
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
};

export default AppRoutes;
