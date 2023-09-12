/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { ErrorsPage } from "../components/errors/ErrorsPage";
import { useAuth } from "../providers";
import { App } from "../App";
import { AuthPage, Logout } from "../pages/Auth";

const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL;

const AppRoutes: FC = () => {
  const { currentUser } = useAuth();
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>

          <Route path="error/*" element={<ErrorsPage />} />
          <Route path="logout" element={<Logout />} />
          {currentUser
            ? (
              <>
                <Route path="/*" element={<PrivateRoutes />} />
                <Route index element={<Navigate to="/raffles" />} />
              </>
            )
            : (
              <>
                <Route path="auth/*" element={<AuthPage />} />
                <Route path="*" element={<Navigate to="/auth" />} />
              </>
            )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
