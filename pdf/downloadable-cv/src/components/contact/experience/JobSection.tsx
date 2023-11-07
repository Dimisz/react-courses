
import { Box, Typography } from "@mui/material";

interface Props {
  job: {
    companyName: string;
    years: string;
    position: string;
    responsibilities: string[];
  }
}
const JobSection = ({job}: Props) => {
  const renderedResponsibilities = job.responsibilities.map((resp: string) => {
    return(
      <Box sx={{pb:0, pl: 4}} key={resp}>
        <Typography sx={{fontStyle: 'italic'}} >
        &#x2022; {resp}
        </Typography>
      </Box>
    )
  });
  return(
    <Box>
        <Box  color='inherit' sx={{ backgroundColor: 'inherit' }}>
          <Box 
            display='flex' 
            justifyContent='space-between' 
            flexDirection={{xs: 'column', sm: 'row'}}
          >
            <Typography variant='h6'>
              {job.companyName}
            </Typography>
            <Typography variant='h6'>
              {job.years}
            </Typography>
          </Box>
          <Typography variant='body1' fontWeight={500}>{job.position}</Typography>
        </Box>
      {renderedResponsibilities}
    </Box>
  )
}

export default JobSection;