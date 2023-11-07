import { Box, Typography } from "@mui/material";
import SkillsSection from "./SkillsSection";
import { skills } from "../data";

interface Props {
  bodyTextSize: any;
  subHeaderTextSize: any;
  sectionHeaderTextSize: any;
}

const SkillsDownloadable = ({bodyTextSize, subHeaderTextSize, sectionHeaderTextSize}:Props) => {
  const renderedSkills = skills.map((skill:{ title:string; skillsList:string[]; }) => {
    return(
      <SkillsSection bodyTextSize={bodyTextSize} subHeaderTextSize={subHeaderTextSize} skill={skill} key={skill.title}/>   
    )
  });
  return(
    <Box pl={4} pr={4} pb={2} pt={2}>
      <Typography variant={sectionHeaderTextSize}>Skills</Typography>
      <Box>
        {renderedSkills}
      </Box>
    </Box>
  )
}

export default SkillsDownloadable;