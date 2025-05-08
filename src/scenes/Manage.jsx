import { Box,Typography, useTheme } from "@mui/material"
import Headers from "../components/Headers";
import { tokens } from "../theme";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../data/mockData";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SecurityIcon from '@mui/icons-material/Security';
import Sidebars from "./global/Sidebars";
import { useEffect } from "react";

const Manage =() => {
    
    
    const isCollapsed = Sidebars
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {field:'id' , headerName:'ID'},
         {field:'name', headerName:'Name', flex:1 , cellClassName:'name-column--cell'},
         {field:'age', headerName:'Age', type:'number' , headerAlign:'left', Align:'left'},
         {field:'phone', headerName:'Phone', flex:0.5},
         {field:'email', headerName:'Email' , flex:1},
         {field:'access', headerName:'Access', flex:1, 
            renderCell: ( {row : {access}}) => {
            return (
              <Box 
                  width='50%'
                  m='0 auto'
                  display='flex' 
                  alignItems='center'
                  justifyContent='center'
                  marginTop='15px'
                  backgroundColor={
                   access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]
                    }
                    borderRadius='4px'
              >
                 { access === 'admin' && <AdminPanelSettingsIcon  />}
                 { access === 'manager' && <SecurityIcon />}
                 { access === 'user' && <LockOpenIcon />}
                 <Typography color={colors.grey[100]} >
                    {access}
                 </Typography>
                </Box>
            )
            }
         }
         
        ]
    return(
        <Box m='5px'>
             <Headers title='Manage Team' subtitle='team' />
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
                    }}
              >
                <DataGrid  
                checkboxSelection
                rows={mockDataTeam}
                columns={columns} 
                rowHeight={40}

                />
             </Box>
        </Box>
    )
}

export default Manage