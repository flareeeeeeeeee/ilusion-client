import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageTitle } from "../../_metronic/layout/core";
import { ListWrapper } from "./CategoryList";
import { NewDocumentWrappeer } from "./CategoryNew";
import { EditDocumentWrappeer } from "./CategoryEdit";
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
                Categorias
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
                Categorias / Agregar
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
                Categorias / Editar
              </PageTitle>
              <EditDocumentWrappeer />
            </>
          }
        />
      </Route>

      <Route index element={<Navigate to="/categories/view" />} />
    </Routes>
  );
};

export default UsersPage;
