import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RequireAuth from "@app/core/quards/RequireAuth";
import MasterLayout from "@app/shared/components/Layout";
import LoginPage from "@app/pages/Login";
import ProductsListPage from "@app/pages/ProductsList";

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
                <ProductsListPage />
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
