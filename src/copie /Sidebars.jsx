import {  useState } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses, menuItemStyles } from 'react-pro-sidebar'
import styled from "styled-components";
import { Box, IconButton, Typography, useTheme} from '@mui/material'
import { NavLink } from "react-router-dom";
import { tokens } from "../../theme";

import Dashbord from "../dashbord";
import ContactsIcon from '@mui/icons-material/Contacts';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PieChartIcon from '@mui/icons-material/PieChart';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HelpIcon from '@mui/icons-material/Help';
import BarChartIcon from '@mui/icons-material/BarChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import MenuIcon from '@mui/icons-material/Menu';
import MapIcon from '@mui/icons-material/Map';
import user from './user.jpg'
import junior from './junior.jpg'
import ImageComponent from "./Image";
import GroupIcon from '@mui/icons-material/Group'

const Item = ({title, icon, selected, to, setSelected}) =>{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  
  return (
    <MenuItem active={selected===title} 
    style={{color: colors.grey[100]}}
    onClick={()=> setSelected(title) }
    icon={icon}
    component={<NavLink to={to} activeClassName='active' className={({isActive}) => (isActive ? 'active': undefined)} />}
    >
    <Typography style={{fontSize:'14px'}}>{title}</Typography>

    </MenuItem>
  )
}

const Sidebars = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected]=useState(Dashbord); 

 
    return(
        <Box sx={{backgroundColor:colors.primary[400], display:'flex'}}>

       <Sidebar isCollapsed={isCollapsed} theme={theme}   rootStyles={{
    [`.${sidebarClasses.container}`]: {
      backgroundColor: colors.primary[400],
      width: isCollapsed ? '80px' : '250px',
      transition: 'width 0.3s'
    },
  }}  collapsed={isCollapsed} >
           <Menu  menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9 ',
        }, [`&:first-of-type:hover`]: { 
            backgroundColor: colors.primary[400], 
        color: 'black',
      }, 
         height:'32px',
         width:'100%'
         
         
      }
    }}   iconShape="square" >
                <MenuItem 
                icon={isCollapsed ? <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuIcon  />
                </IconButton> : undefined 
                } 
                  >
                    {!isCollapsed && (
                        <Box display='flex'
                             justifyContent='space-between'
                             alignItems='center'
                             ml='10px' >
                              <Typography variant='h7' color={colors.grey[100]} >
                                ADMINS
                              </Typography>
                              <IconButton onClick={ () => setIsCollapsed(!isCollapsed)} >
                                      <MenuIcon />
                              </IconButton>

                             </Box>
                    )}
                </MenuItem>

                {/*User */}

                {!isCollapsed && (
                    <Box mb='10px' >
                        <Box display='flex' justifyContent='center' alignItems='center' >
                         {/*  <img width='80px' height='80px' src={user} style={{borderRadius:'50%', cursor:'pointer'}} />
                            
                         */}  <ImageComponent />
                        </Box>
                        <Box textAlign='center' >
                            <Typography variant='h6' color={colors.grey[100]} fontWeight='bold' sx={{m:"5px 0 0 0"}}> Arlette Tchinda</Typography>
                            <Typography variant='h10' color={colors.grey[100]} >RH Brassaf</Typography>
                        </Box>
                    </Box>
                )}
               

               
                <Box className={!isCollapsed ? 'item' : undefined} paddingLeft={!isCollapsed  ? undefined : '5px'}  paddingBottom='9px' >
                        <Item title='Dashbord' to='/' icon={<HomeIcon sx={{height:'17px', width:'17px'}} />}  selected={selected}  setSelected={setSelected} />
                    <Typography variant='h9' color={colors.grey[300]} style={{mb:'5px'}} > 
                      Data
                    </Typography>
                         <Item title='Manage Team' to='/team' selected={selected} setSelected={setSelected} icon={<GroupIcon sx={{height:'17px', width:'17px'}} />} />
                         <Item title='Contact Infos' to='/contacts' selected={selected} setSelected={setSelected}  icon={<ContactsIcon sx={{height:'17px', width:'17px'}} />} />
                         <Item title='Invoices Balances' to='/invoices' selected={selected} setSelected={setSelected}  icon={<ReceiptIcon sx={{height:'17px', width:'17px'}} />} />
                     <Typography variant='h9' color={colors.grey[300]} style={{mb:'5px'}} > 
                      Pages
                    </Typography>
                        <Item title='Profile From' to='/from' selected={selected} setSelected={setSelected}  icon={<PersonIcon sx={{height:'17px', width:'17px'}} />} />
                        <Item title='calendar' to='/calendar' selected={selected} setSelected={setSelected}  icon={<CalendarTodayIcon sx={{height:'17px', width:'17px'}} />} />
                        <Item title='FAq Page' to='/faq' selected={selected} setSelected={setSelected}  icon={<HelpIcon sx={{height:'17px', width:'17px'}} />} />
                    <Typography variant='h9' color={colors.grey[300]} style={{mb:'5px'}} > 
                     Charts
                    </Typography>
                     
                        <Item title='Bar Chart' to='/bar' selected={selected} setSelected={setSelected}  icon={<BarChartIcon sx={{height:'17px', width:'17px'}} />} />
                        <Item title='Pie Chart' to='/pie' selected={selected} setSelected={setSelected}  icon={<PieChartIcon sx={{height:'17px', width:'17px'}} />} />
                        <Item title='Line Chart' to='/line' selected={selected} setSelected={setSelected}  icon={<TimelineIcon sx={{height:'17px', width:'17px'}}/>} />
                        <Item title='Geographie' to='/geographie' selected={selected} setSelected={setSelected}  icon={<MapIcon sx={{height:'17px', width:'17px'}} />} />
                </Box>
             
           </Menu>
       </Sidebar>

       </Box>
    )
}

export default Sidebars