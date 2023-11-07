import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

const EducationAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const greaterThanSm = useMediaQuery(theme.breakpoints.up("sm"));
  const bodyTextVariant = greaterThanSm ? 'h6' : 'body1';
  const titleVariant = greaterThanSm ? 'h5' : 'h6';

  return(
    <Accordion expanded={expanded}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="education-content"
          id="education-header"
          onClick={() => setExpanded(!expanded)}
        >
          <Typography variant={titleVariant}>Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Box display='flex' justifyContent='space-between'>
              <Typography variant={titleVariant}>
              Minsk State Linguistic University, Belarus
              </Typography>
              <Typography variant={titleVariant}>
                2009
              </Typography>
            </Box>
            <Typography variant={bodyTextVariant} fontStyle='italic'>
              BA in Linguistics, Translation of English and Arabic
            </Typography>
          </Box>
          <Divider/>
          <Box pt={1}>
            <Box display='flex' justifyContent='space-between'>
              <Typography variant={titleVariant}>
              Belarusian State University, Belarus
              </Typography>
              <Typography variant={titleVariant}>
                2014
              </Typography>
            </Box>
            <Typography variant={bodyTextVariant} fontStyle='italic'>
              BA in Law
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
  )
}
export default EducationAccordion;