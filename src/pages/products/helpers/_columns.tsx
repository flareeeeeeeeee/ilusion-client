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
    accessor: "price",
    Cell: ({ value }) => {
      return <div>Q {(value || "").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>;
    }
  },
  {
    Header: "Unidades en Espanol",
    accessor: "esp_stock",
  },
  {
    Header: "Unidades en Ingles",
    accessor: "eng_stock",
  },
  {
    Header: "Estado",
    accessor: "status",
  },
  {
    Header: "Acciones",
    id: "actions",
    Cell: ({ row }) => {
      return (
        <div className="px-2">
          <Link
            to={`../edit/${row.original.id}`}
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
