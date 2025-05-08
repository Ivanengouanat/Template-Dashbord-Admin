import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";

const Headers =({title, subtitle}) =>{
  
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return(
        <Box display='block' mb='5px' marginLeft='5px' >
            <Typography variant="h5" color={colors.grey} >
                {title}
            </Typography>
            <Typography variant="h7" color={colors.grey} >
                {subtitle}
            </Typography>
        </Box>
    )
}

export default Headers