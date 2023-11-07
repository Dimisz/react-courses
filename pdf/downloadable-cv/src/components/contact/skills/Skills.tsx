import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import SkillsSection from "./SkillsSection";
import { skills } from "../data";



const Skills = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const greaterThanSm = useMediaQuery(theme.breakpoints.up("sm"));
  // const bodyTextVariant = greaterThanSm ? 'h6' : 'body1';
  const titleVariant = greaterThanSm ? 'h5' : 'h6';


  const renderedSkills = skills.map((skill:{ title:string; skillsList:string[]; }) => {
    return(
      <SkillsSection skill={skill} key={skill.title}/>   
    )
  });
  return(
    <Accordion expanded={expanded}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="education-content"
          id="education-header"
          onClick={() => setExpanded(!expanded)}
        >
          <Typography variant={titleVariant}>Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {renderedSkills}
        </AccordionDetails>
      </Accordion>
  )
}

export default Skills;