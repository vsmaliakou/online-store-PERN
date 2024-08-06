import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";

const AppRouter = () => {
  const isAuth = false;

  return (
    <Routes>
      {isAuth && authRoutes.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />
      })}

      {publicRoutes.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />
      })}

      <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
