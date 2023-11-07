import { Box, Divider, Typography } from "@mui/material";

const EducationDownloadable = () => {
  const headerVariant = 'h5';
  const titleVariant = 'h6';
  const bodyTextVariant = 'body1';

  return(
    <Box pl={4} pr={4} pb={2} pt={2}>
        <Typography variant={headerVariant}>Education</Typography>
        <Box>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant={titleVariant}>
            Minsk State Linguistic University, Belarus
            </Typography>
            <Typography variant={titleVariant}>
              2009
            </Typography>
          </Box>
          <Typography variant={bodyTextVariant} fontStyle='italic'>
            BA in Linguistics, Translation of English and Arabic
          </Typography>
        </Box>
        {/* <Divider/> */}
        <Box pt={1}>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant={titleVariant}>
            Belarusian State University, Belarus
            </Typography>
            <Typography variant={titleVariant}>
              2014
            </Typography>
          </Box>
          <Typography variant={bodyTextVariant} fontStyle='italic'>
            BA in Law
          </Typography>
        </Box>
      </Box>
  )
}
export default EducationDownloadable;