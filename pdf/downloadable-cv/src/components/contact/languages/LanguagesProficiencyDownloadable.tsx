import { Box, Divider, Typography } from "@mui/material";
const LanguagesProficiencyDownloadable = () => {
  const textFontSize = 'body1';
  const titleFontSize = 'h5';

  return(
    <Box pl={4} pr={4} pb={2} pt={2}>
        <Typography variant={titleFontSize}>Languages</Typography>
        <Box>
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
              <Typography variant={textFontSize}>
                Fluent (TOEFL Score 115)
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

        </Box>
      </Box>
  )
}
export default LanguagesProficiencyDownloadable;
