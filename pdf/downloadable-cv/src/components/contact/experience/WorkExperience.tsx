import { Accordion, AccordionDetails, AccordionSummary, Typography, useMediaQuery, useTheme } from "@mui/material";
import JobSection from "./JobSection";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { jobDescriptions } from "../data";

const renderedJobs = jobDescriptions.map((job) => {
  return(
    <JobSection job={job} key={job.companyName}/>
  );
})

const WorkExperience = () => {
  const [expanded, setExpanded] = useState(false);

  const theme = useTheme();
  const greaterThanSm = useMediaQuery(theme.breakpoints.up("sm"));
  const titleFontSize = greaterThanSm ? 'h5' : 'h6';

  return(
    <Accordion expanded={expanded}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="education-content"
          id="education-header"
          onClick={() => setExpanded(!expanded)}
        >
          <Typography variant={titleFontSize}>Work Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {renderedJobs}
        </AccordionDetails>
      </Accordion>
  )
}
export default WorkExperience;