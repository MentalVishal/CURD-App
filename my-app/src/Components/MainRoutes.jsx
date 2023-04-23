import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Admin } from "../Admin";
import { Login } from "../Pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { EditPage } from "../Pages/EditPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route path="/edit/:id" element={<EditPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};
