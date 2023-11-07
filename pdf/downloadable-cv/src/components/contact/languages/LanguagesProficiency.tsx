import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

const LanguagesProficiency = () => {
  const [expanded, setExpanded] = useState(false);

  const theme = useTheme();
  const greaterThanSm = useMediaQuery(theme.breakpoints.up("sm"));
  const textFontSize = greaterThanSm ? 'h6' : 'body1';
  const titleFontSize = greaterThanSm ? 'h5' : 'h6';

  return(
    <Accordion expanded={expanded}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="education-content"
          id="education-header"
          onClick={() => setExpanded(!expanded)}
        >
          <Typography variant={titleFontSize}>Languages Proficiency</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Box display='flex' justifyContent='space-between'>
              <Typography variant={textFontSize}>
              Ukranian, Belarusian, Russian
              </Typography>
              <Typography variant={textFontSize}>
                Native
              </Typography>
            </Box>
            <Divider/>
            <Box display='flex' justifyContent='space-between' pt={1}>
              <Typography variant={textFontSize}>
              English
              </Typography>
              <Typography variant={textFontSize} display={{xs: 'none', sm:'block'}}>
                Fluent (TOEFL Score 115)
              </Typography>
              <Typography variant={textFontSize} display={{sm: 'none'}}>
                Fluent
              </Typography>
            </Box>
            <Divider/>
            <Box display='flex' justifyContent='space-between' pt={1}>
              <Typography variant={textFontSize}>
              Arabic
              </Typography>
              <Typography variant={textFontSize}>
                Intermediate
              </Typography>
            </Box>
            <Divider/>
            <Box display='flex' justifyContent='space-between' pt={1}>
              <Typography variant={textFontSize}>
              Mandarin
              </Typography>
              <Typography variant={textFontSize}>
                Beginner
              </Typography>
            </Box>

        </AccordionDetails>
      </Accordion>
  )
}
export default LanguagesProficiency;
