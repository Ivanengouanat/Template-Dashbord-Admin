import { Box, useTheme, Typography } from "@mui/material";
import Headers from "../components/Headers";
import { tokens } from "../theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../data/mockData";
import Sidebars from "./global/Sidebars";

const Contact = () => {
  const isCollapsed = Sidebars;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      Align: "left",
    },
    { field: "phone", headerName: "Phone", flex: 0.5 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipcode", headerName: "ZipCode", flex: 1 },
    { field: "registrarId", headerName: "RegistrarId", flex: 1 },
  ];
  return (
    <Box m="5px">
      <Headers title="Contacts" subtitle="list all your contact" />
      <Box
        marginLeft="20px"
        height="75vh"
        width={isCollapsed ? "calc(100% - 80px)" : "calc(100% - 250px)"}
        sx={{
          "& .MuiDataGrid-root": { border: "none", color: colors.primary[100] },
          "& .MuiDataGrid-cell": { border: "none" },
          "& .name-column--cell": { color: colors.greenAccent[500] },
          "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer  .MuiButton-text": {
            color: colors.grey[100],
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataContacts}
          columns={columns}
          rowHeight={35}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contact;
