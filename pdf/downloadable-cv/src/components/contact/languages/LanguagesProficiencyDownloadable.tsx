import { Box, Grid, Typography } from "@mui/material";

interface Props {
  bodyTextSize: any;
  subHeaderTextSize: any;
  sectionHeaderTextSize: any;
}

const LanguagesProficiencyDownloadable = ({bodyTextSize, sectionHeaderTextSize, subHeaderTextSize}:Props) => {

  return(
    <Box pl={4} pr={4} pb={2} pt={2}>
        <Typography variant={sectionHeaderTextSize}>Languages</Typography>
        <Grid container spacing={3} >
          <Grid item xs={3} display='flex' justifyContent='flex-start' alignItems='center'>
                  <Typography variant={bodyTextSize}>English</Typography>
                  <Typography variant={bodyTextSize} fontStyle='italic' pl={2}>Fluent</Typography>
          </Grid>
          <Grid item xs={3} display='flex' justifyContent='flex-start' alignItems='center'>
                  <Typography variant={bodyTextSize}>Ukranian, Russian</Typography>
                  <Typography variant={bodyTextSize} fontStyle='italic' pl={2}>Native</Typography>
          </Grid>
          <Grid item xs={3} display='flex' justifyContent='flex-start' alignItems='center'>
                  <Typography variant={bodyTextSize}>Arabic</Typography>
                  <Typography variant={bodyTextSize} fontStyle='italic' pl={2}>Intermediate</Typography>
          </Grid>
          <Grid item xs={3} display='flex' justifyContent='flex-start' alignItems='center'>
                  <Typography variant={bodyTextSize}>Mandarin</Typography>
                  <Typography variant={bodyTextSize} fontStyle='italic' pl={2}>Beginner</Typography>
          </Grid>
        </Grid> 
    </Box>);
}
export default LanguagesProficiencyDownloadable;
