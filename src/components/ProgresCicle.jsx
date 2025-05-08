import { tokens } from "../theme";
import { Box, useTheme } from "@mui/material";


const ProgresCicle = ({ progress = '0.75' , size='40'}) => { // progress : Une prop qui représente la progression (valeur par défaut de 0.75).

   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const angle = progress * 360; 

   return(
    <Box  sx={{
        background: `radial-gradient(${colors.primary[400]} 55% , transparent 56%),  
                    conic-gradient(transparent 0deg  ${angle}deg, ${colors.blueAccent[500]}  ${angle}deg  360deg),
            ${colors.greenAccent[500]}` , 
            borderRadius: '50%',
            width:`${size}px`,
            height:`${size}px`
    }} />

    // radial-gradient : Crée un gradient radial avec colors.primary[400] au centre (55%) et transparent au-delà (56%).
    // conic-gradient : Crée un gradient conique basé sur l'angle de progression calculé. La partie colorée utilise colors.blueAccent[500] et le reste utilise transparent.

   )
}

export default ProgresCicle;