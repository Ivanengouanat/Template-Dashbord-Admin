import { Box } from "@mui/material";
import Headers from "../components/Headers";
import Piechar from "../components/Piechar";

const Pie = () => {
  return (
    <Box>
      <Headers title="Pie Chart" subtitle="pie" />

      <Box height="75vh">
        <Piechar />
      </Box>
    </Box>
  );
};

export default Pie;
