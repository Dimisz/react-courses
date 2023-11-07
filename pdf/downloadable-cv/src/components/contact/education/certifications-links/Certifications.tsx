import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import CertificationLink from "./CertificationLink";
import { certifications } from "../../data";



const Certifications = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const greaterThanSm = useMediaQuery(theme.breakpoints.up("sm"));
  const titleFontSize = greaterThanSm ? 'h5' : 'h6';

  const renderedLinks = certifications.map((cert) => {
    return(
      <CertificationLink key={cert.content} title={cert.title} content={cert.content}/>
    )
  })
  
  return(
    <Accordion expanded={expanded}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="education-content"
          id="education-header"
          onClick={() => setExpanded(!expanded)}
        >
          <Typography variant={titleFontSize}>Courses & Certifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {renderedLinks}
        </AccordionDetails>
      </Accordion>
  )
}
export default Certifications;