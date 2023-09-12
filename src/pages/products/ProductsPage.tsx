import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageTitle } from "../../_metronic/layout/core";
import { ListWrapper } from "./ProductsList";
import { NewDocumentWrappeer } from "./ProductsNew";
import { EditDocumentWrappeer } from "./ProductEdit";
// import { UsersNewWrapper } from "./NewUser"

const UsersPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path="/view"
          element={
            <>
              <PageTitle>
                Productos
              </PageTitle>
              <ListWrapper />
            </>
          }
        />
        <Route
          path="/create"
          element={
            <>
              <PageTitle>
                Productos / Agregar
              </PageTitle>
              <NewDocumentWrappeer />
            </>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <>
              <PageTitle>
                Productos / Editar
              </PageTitle>
              <EditDocumentWrappeer />
            </>
          }
        />
      </Route>

      <Route index element={<Navigate to="/products/view" />} />
    </Routes>
  );
};

export default UsersPage;
