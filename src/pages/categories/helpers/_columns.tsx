// @ts-nocheck
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { IndexColumn } from "../../helpers/IndexColumn";
const Columns = (state): ReadonlyArray<Column<Object>> => [
  {
    Header: "No",
    id: "selection",
    Cell: ({ row }) => IndexColumn(row.index, state),
  },
  {
    Header: "Nombre",
    accessor: "name",
  },
  {
    Header: "Descripcion",
    accessor: "description",
  },

  {
    Header: "Acciones",
    id: "actions",
    Cell: ({ row }) => {
      return (
        <div className="px-2">
          <Link
            to={`/categories/edit/${row.original._id}`}
            className="btn btn-secondary btn-sm me-2 mb-2 hover-elevate-down"
          >
            Editar
          </Link>
        </div>
      );
    },
  },
];

export { Columns };
