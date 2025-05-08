import { Box, IconButton , useTheme} from '@mui/material'
import { useContext } from 'react'
import { colorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(colorModeContext)

    return (
        <Box display='flex' justifyContent='space-between' p='5px 10px' >
            <Box display='flex' backgroundColor={colors.primary[400]} borderRadius='3px' width="300px" height='30px'>
                <InputBase sx={{ml: 2, flex: 1}} placeholder='search' />
                <IconButton type='button' sx={{p:1}}>
                    <SearchIcon />
                </IconButton>
            </Box>

            <Box display='flex' alignItems='center' justifyContent='center' height='30px'>
                <IconButton onClick = {colorMode.toggleColorMode}>
                  {theme.palette.mode === 'dark' ? 
                  (<DarkModeIcon /> ) : (<LightModeIcon />) }
                </IconButton>
                <IconButton >
                    <CircleNotificationsIcon />
                </IconButton>
                <IconButton>
                     <SettingsIcon />
                </IconButton>
                <IconButton>
                     <PersonIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Topbar