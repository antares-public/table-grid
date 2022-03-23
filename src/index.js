import React, { useState } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import "./index.css";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const App = () => {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35_000 },
    { make: "Ford", model: "Mondeo", price: 32_000 },
    { make: "Porsche", model: "Boxter", price: 72_000 },
  ]);

  const rowClassRules = {
    "row-fail": (params) => params.data.price > 50_000,
    "row-pass": (params) => params.data.price <= 50_000,
  };

  const [columnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        rowClassRules={rowClassRules}
        rowData={rowData}
        columnDefs={columnDefs}
      ></AgGridReact>
    </div>
  );
};

render(<App />, document.getElementById("root"));
