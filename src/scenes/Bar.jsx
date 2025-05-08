import { Box } from "@mui/material"
import Headers from "../components/Headers";
import Barchar from "../components/Barchar";

const Bar =() => {
    return(
        <Box >
            <Headers title='Bar Chart' subtitle='bar' />
           
            <Box height="75vh">
                <Barchar />
            </Box>
        </Box>
    )
}

export default Bar