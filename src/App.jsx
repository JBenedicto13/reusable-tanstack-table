import "./App.css";
import BasicTable from "./components/BasicTable";
import Table from "./components/Table";
import mData from "./assets/MOCK_DATA.json";
import movies from "./assets/MOVIES_DATA.json";
import { useMemo } from "react";

function App() {
  const data = useMemo(() => mData, []);

  /** @type import('@tanstack/react-table').ColumnDef<any> */
  const columns = [
    {
      header: "Id",
      accessorKey: "id",
      footer: "Id",
    },
    {
      header: "Name",
      columns: [
        {
          header: "First Name",
          accessorKey: "first_name",
          footer: "First Name",
        },
        {
          header: "Last Name",
          accessorKey: "last_name",
          footer: "Last Name",
        },
      ],
    },
    // {
    //   header: "Name",
    //   accessorFn: (row) => row.first_name + " " + row.last_name,
    // },
    // {
    //   header: "First Name",
    //   accessorKey: "first_name",
    //   footer: "First Name",
    // },
    // {
    //   header: "Last Name",
    //   accessorKey: "last_name",
    //   footer: "Last Name",
    // },
    {
      header: "Email",
      accessorKey: "email",
      footer: "Email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
      footer: "Gender",
    },
    {
      header: "Date of Birth",
      accessorKey: "dob",
      footer: "Date of Birth",
      cell: (info) =>
        DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
    },
  ];
  const movieColumns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Genre",
      accessorKey: "genre",
    },
    {
      header: "Rating",
      accessorKey: "rating",
    },
  ];
  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h2>Tanstack Table</h2>
        </div>
        <div className="table-container">
          {/* <Table /> */}
          <BasicTable data={data} columns={columns} />
        </div>
      </div>
    </div>
  );
}

export default App;
