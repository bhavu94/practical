import React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { withState, ColumnMenu } from "./withState";
import { GridColumn, Grid } from "@progress/kendo-react-grid";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { CircularProgress } from "@material-ui/core";

const StatefulGrid = withState(Grid);

const Table = ({ isLoading, data, setExport }) => {
  return isLoading ? (
    <CircularProgress />
  ) : (
    <div>
      <ExcelExport data={data} ref={(exporter) => setExport(exporter)}>
        <StatefulGrid data={data || []} style={{ height: "600px" }}>
          <GridColumn
            title={"S/N"}
            cell={(props) => (
              <td colSpan={props.colSpan} style={props.style}>
                <span>{props.dataIndex + 1}</span>
              </td>
            )}
            filterable={false}
          />
          <GridColumn
            field="fullName"
            title={"Full Name"}
            width={200}
            columnMenu={ColumnMenu}
          />
          <GridColumn field="email" title="Email" />
          <GridColumn field="state" title="State" columnMenu={ColumnMenu} />
          <GridColumn field="city" title="City" columnMenu={ColumnMenu} />
          <GridColumn
            field="outlet"
            title="Outlet Purchased"
            columnMenu={ColumnMenu}
          />
          <GridColumn field="phone" title="Phone" columnMenu={ColumnMenu} />
          <GridColumn
            field="phone2"
            title="Optional Phone"
            columnMenu={ColumnMenu}
          />
          <GridColumn
            field="imei"
            title="IMEI"
            filterable={false}
            columnMenu={ColumnMenu}
          />
          <GridColumn
            field="createdAt"
            title="Date created"
            columnMenu={ColumnMenu}
          />
        </StatefulGrid>
      </ExcelExport>
    </div>
  );
};

export default Table;
