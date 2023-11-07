// @ts-nocheck
import { Column } from "react-table";
import moment from "moment";
import { Link } from "react-router-dom";
const Columns: ReadonlyArray<Column<Object>> = [
  {
    Header: "No",
    id: "selection",
    Cell: ({ row }) => <div>{row.index + 1}</div>,
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
    Header: "Categoria",
    accessor: "category",
  },
  {
    Header: "Precio",
    accessor: "prize",
  },
  {
    Header: "Unidades",
    accessor: "units",
  },
  {
    Header: "Estado",
    accessor: "status",
  },
  {
    Header: "Fecha de Salida",
    accessor: "release_date",
  },

  {
    Header: "Acciones",
    id: "actions",
    Cell: ({ row }) => {
      return (
        <div className="px-2">
          <Link
            to={`../edit/${row.original._id}`}
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
