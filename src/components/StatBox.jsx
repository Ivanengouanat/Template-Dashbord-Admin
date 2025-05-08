import { tokens } from "../theme";
import { Box, useTheme, Typography } from "@mui/material";
import ProgresCicle from "./ProgresCicle";


const StatBox = ({title, subtitle, icon, increase, progress}) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return(
        <Box width='100%' m='10px' >
            <Box display='flex' justifyContent='space-between'>
                <Box>
                    {icon}
                     <Typography variant='h6' fontWeight='bold' sx={{color: colors.grey[100]}} >
                        {title}
                     </Typography>
                </Box>
                
                <Box display='block' >
                     <Typography variant='h7' sx={{color: colors.greenAccent[500]}} >
                        {subtitle}
                     </Typography>
                     <Typography variant='h7' fontStyle='italic' sx={{color: colors.greenAccent[500]}} >
                        {increase}
                     </Typography>
                     <Box display='flex' justifyContent='center' alignItems='center'>
                    <ProgresCicle progress={progress} />
                </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default StatBox;