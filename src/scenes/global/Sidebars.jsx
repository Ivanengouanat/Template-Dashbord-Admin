import { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  sidebarClasses,
  menuItemStyles,
} from "react-pro-sidebar";
import styled from "styled-components";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { tokens } from "../../theme";

import Dashbord from "../dashbord";
import ContactsIcon from "@mui/icons-material/Contacts";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PieChartIcon from "@mui/icons-material/PieChart";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptIcon from "@mui/icons-material/Receipt";
import HelpIcon from "@mui/icons-material/Help";
import BarChartIcon from "@mui/icons-material/BarChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import MenuIcon from "@mui/icons-material/Menu";
import MapIcon from "@mui/icons-material/Map";
import user from "./user.jpg";
import junior from "./junior.jpg";
import ImageComponent from "./Image";
import GroupIcon from "@mui/icons-material/Group";

const Sidebars = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(Dashbord);

  return (
    <Box sx={{ backgroundColor: colors.primary[400], display: "flex" }}>
      <Sidebar
        isCollapsed={isCollapsed}
        theme={theme}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: colors.primary[400],
            width: isCollapsed ? "80px" : "250px",
            transition: "width 0.3s",
          },
        }}
        collapsed={isCollapsed}
      >
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                transition: "0.3s ease-in-out",
                transform: "translateX(25px)",
                color: colors.grey[1000],
              },
              [`&:first-of-type:hover`]: {
                backgroundColor: colors.primary[400],
              },
              [`&:hover`]: {
                color: colors.grey[1000],
                transform: "translateX(-10px)",
                transition: "0.5s ease-in-out",
              },
              height: "32px",
              width: "100%",
            },
          }}
          iconShape="square"
        >
          <MenuItem
            className="menu"
            icon={
              isCollapsed ? (
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuIcon />
                </IconButton>
              ) : undefined
            }
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="10px"
              >
                <Typography variant="h7" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/*User */}

          {!isCollapsed && (
            <Box mb="10px">
              <Box display="flex" justifyContent="center" alignItems="center">
                {/*  <img width='80px' height='80px' src={user} style={{borderRadius:'50%', cursor:'pointer'}} />
                            
                         */}{" "}
                <ImageComponent />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h6"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "5px 0 0 0" }}
                >
                  {" "}
                  Arlette Miss
                </Typography>
                <Typography variant="h10" color={colors.grey[100]}>
                  RH Brassaf
                </Typography>
              </Box>
            </Box>
          )}

          <Box
            className={!isCollapsed ? "item" : undefined}
            paddingLeft={!isCollapsed ? undefined : "5px"}
            paddingBottom="9px"
          >
            <MenuItem
              component={<NavLink to="/" />}
              icon={<HomeIcon sx={{ height: "17px", width: "17px" }} />}
            >
              Dashbord
            </MenuItem>
            <Typography
              variant="h9"
              color={colors.grey[300]}
              style={{ mb: "5px" }}
            >
              Data
            </Typography>
            <MenuItem
              component={<NavLink to="/team" />}
              icon={<GroupIcon sx={{ height: "17px", width: "17px" }} />}
            >
              Manage Team
            </MenuItem>
            <MenuItem
              component={<NavLink to="/contacts" />}
              icon={<ContactsIcon sx={{ height: "17px", width: "17px" }} />}
            >
              Contact Infos
            </MenuItem>
            <MenuItem
              component={<NavLink to="/invoices" />}
              icon={<ReceiptIcon sx={{ height: "17px", width: "17px" }} />}
            >
              Invoices Balances
            </MenuItem>
            <Typography
              variant="h9"
              color={colors.grey[300]}
              style={{ mb: "5px" }}
            >
              Pages
            </Typography>
            <MenuItem
              component={<NavLink to="/from" />}
              icon={<PersonIcon sx={{ height: "17px", width: "17px" }} />}
            >
              Profile From
            </MenuItem>
            <MenuItem
              component={<NavLink to="/calendar" />}
              icon={
                <CalendarTodayIcon sx={{ height: "17px", width: "17px" }} />
              }
            >
              calendar
            </MenuItem>
            <MenuItem
              component={<NavLink to="/faq" />}
              icon={<HelpIcon sx={{ height: "17px", width: "17px" }} />}
            >
              FAq Page
            </MenuItem>

            <Typography
              variant="h9"
              color={colors.grey[300]}
              style={{ mb: "5px" }}
            >
              Charts
            </Typography>

            <MenuItem
              component={<NavLink to="/bar" />}
              icon={<BarChartIcon sx={{ height: "17px", width: "17px" }} />}
            >
              Bar Chart
            </MenuItem>
            <MenuItem
              component={<NavLink to="/pie" />}
              icon={<PieChartIcon sx={{ height: "17px", width: "17px" }} />}
            >
              Pie Chart
            </MenuItem>
            <MenuItem
              component={<NavLink to="/line" />}
              icon={<TimelineIcon sx={{ height: "17px", width: "17px" }} />}
            >
              Line Chart
            </MenuItem>
            <MenuItem
              component={<NavLink to="/geographie" />}
              icon={<MapIcon sx={{ height: "17px", width: "17px" }} />}
            >
              Geographie
            </MenuItem>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Sidebars;
