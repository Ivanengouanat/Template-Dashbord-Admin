import { Box } from "@mui/material"
import Headers from "../components/Headers"
import GeographyChart from "../components/Geographychar"

const Geographie =() => {
    return(
        <Box >
            <Headers title='Geographie' subtitle='map' />

            <Box height='75vh'>
                <GeographyChart />
            </Box>
        </Box>
    )
}

export default Geographie