import { Box, useTheme, Typography} from "@mui/material"
import Headers from "../components/Headers";
import { tokens } from "../theme";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../data/mockData";
import Sidebars from "./global/Sidebars";

const Invoice =() => {


    const isCollapsed = Sidebars
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {field:'id' , headerName:'ID'},
         {field:'name', headerName:'Name', flex:1 , cellClassName:'name-column--cell'},
         {field:'phone', headerName:'Phone', flex:0.5},
         {field:'email', headerName:'Email' , flex:1},
         {  field:'cost' , headerName:'Cost', flex:1 },
         {  field:'date' , headerName:'Date', flex:1 }
         
        ]
    return(
        <Box m='5px'>
             <Headers title='Invoices' subtitle='list all your Invoices' />
             <Box  marginLeft='20px' height='75vh' width={isCollapsed ? "calc(100% - 80px)" : "calc(100% - 250px)"} 
               sx={{'& .MuiDataGrid-root' :{ border:'none', color: colors.primary[100] },
                '& .MuiDataGrid-cell' :{ border:'none' },
                '& .name-column--cell' :{ color: colors.greenAccent[500]},
                '& .css-yrdy0g-MuiDataGrid-columnHeaderRow' : {  backgroundColor: colors.blueAccent[700]},
                "& .MuiDataGrid-columnHeader" : { backgroundColor: colors.blueAccent[700], borderBottom:'none'},
                '& .MuiDataGrid-footerContainer' :{ borderTop:'none', backgroundColor: colors.blueAccent[700]},
                "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400]},
                "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                  },
                '& .MuiDataGrid-toolbarContainer  .MuiButton-text': {color: colors.grey[100] }
                    }}
              >
                <DataGrid  
                checkboxSelection
                rows={mockDataInvoices}
                columns={columns} 
                rowHeight={35}
                
                />
             </Box>
        </Box>
    )
}

export default Invoice