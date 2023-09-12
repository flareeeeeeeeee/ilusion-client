// @ts-nocheck
import { Column } from "react-table";
import { UserInfoCell } from "./UserInfoCell";
import moment from "moment";
import { Link } from "react-router-dom";
const usersColumns: ReadonlyArray<Column<Object>> = [
  {
    Header: "No",
    id: "selection",
    Cell: ({ row }) => <div>{row.index + 1}</div>,
  },
  {
    Header: "Foto",
    id: "photo",
    Cell: ({ ...props }) => <UserInfoCell user={props.data[props.row.index]} />,
  },
  {
    Header: "Nombre",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },

  {
    Header: "Última sesión",
    accessor: "last_login",
    Cell: ({ row }) => {
      return (
        <div>
          {row.original.last_login
            ? moment(row.original.last_login).format(
              "DD/MM/YYYY hh:mm A",
            ): ""}
        </div>
      );
    },
  },
  {
    Header: "Acciones",
    id: "actions",
    Cell: ({ row }) => {
      return (
        <div className="px-2">
          <Link
            to={`/users/edit/${row.original._id}`}
            className="btn btn-secondary btn-sm me-2 mb-2 hover-elevate-down"
          >
            Editar
          </Link>
        </div>
      );
    },
  },
];

export { usersColumns };
