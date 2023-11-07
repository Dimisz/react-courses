import { Grid, Typography } from "@mui/material"

interface Props {
  label: string;
  content: string;
}

const PersonalInfoGridRow = ({label, content }: Props) => {
  return(
    <Grid 
      item 
      xs={12} md={6}
      display='flex' 
      alignItems='center' 
      justifyContent={{xs: 'space-between', md: 'flex-start'}}
    >
      <Typography variant='h6' align="left" pr={2}>
        {label}
      </Typography>
      <Typography>
        {content}
      </Typography>
    </Grid>
  );
}

export default PersonalInfoGridRow;