import { Box, useTheme, Typography, colors } from "@mui/material";
import * as React from "react";
import Headers from "../components/Headers";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { tokens } from "../theme";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Headers title="Faq" subtitle="help" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            une question importante
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>pourquoi choisie Ivane comme developpeur</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            une question importante
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>pourquoi choisie Ivane comme developpeur</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            une question importante
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>pourquoi choisie Ivane comme developpeur</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            une question importante
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>pourquoi choisie Ivane comme developpeur</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            une question importante
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>pourquoi choisie Ivane comme developpeur</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            une question importante
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>pourquoi choisie Ivane comme developpeur</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
