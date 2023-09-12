import { FC, lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MasterLayout } from "../_metronic/layout/MasterLayout";
import TopBarProgress from "react-topbar-progress-indicator";
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";
import { getCSSVariableValue } from "../_metronic/assets/ts/_utils";
import { WithChildren } from "../_metronic/helpers";

const PrivateRoutes = () => {
  // const WizardsPage = lazy(() => import("../modules/wizards/WizardsPage"));
  // const AccountPage = lazy(() => import("../modules/accounts/AccountPage"));
  // const WidgetsPage = lazy(() => import("../modules/widgets/WidgetsPage"));
  // const ChatPage = lazy(() => import("../modules/apps/chat/ChatPage"));
  const UsersPage = lazy(() => import("../pages/users/UsersPage"));
  const ProductsPage = lazy(() => import("../pages/products/ProductsPage"));
  const CategoryPage = lazy(() => import("../pages/categories/CategoryPage"));

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<DashboardWrapper />} />

        <Route
          path="/users/*"
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        <Route
          path="/products/*"
          element={
            <SuspensedView>
              <ProductsPage />
            </SuspensedView>
          }
        />
        <Route
          path="/categories/*"
          element={
            <SuspensedView>
              <CategoryPage />
            </SuspensedView>
          }
        />
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue("--bs-primary");
  TopBarProgress.config({
    barColors: {
      "0": baseColor,
    },
    barThickness: 2,
    shadowBlur: 5,
  });

  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PrivateRoutes };
