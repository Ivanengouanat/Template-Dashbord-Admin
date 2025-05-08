import { Box } from "@mui/material"
import Headers from "../components/Headers"
import Linechar from "../components/Linechar"

const Line =() => {
    return(
        <Box >
             <Headers title='Line Chart' subtitle='line' />

             <Box height='75vh'>
                <Linechar />
             </Box>
        </Box>
    )
}

export default Line