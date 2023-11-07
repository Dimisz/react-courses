import { Box, Typography } from "@mui/material";

interface Props {
  skill: {
    title: string;
    skillsList: string[];
  }
}

const SkillsSection = ({skill}:Props) => {
  const renderedSkills = skill.skillsList.map((skillItem: string) => {
    return(
      <Box sx={{pb:0, pl: 4}} key={skillItem}>
        <Typography sx={{fontStyle: 'italic'}} >
        &#x2022; {skillItem}
        </Typography>
      </Box>
    )
  })
  return(
    <Box>
      <Box color='inherit' sx={{ backgroundColor: 'inherit' }}>
          <Typography variant='h6'>{skill.title}</Typography>
      </Box>
      {renderedSkills}
    </Box>
  )
}

export default SkillsSection;