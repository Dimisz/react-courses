import { Box, Divider, Grid } from "@mui/material"
import DownloadableName from "./DownloadableName";
import DownloadableLinks from "./DownloadableLinks";
// import DownloadableInfoGrid from "./DownloadableInfoGrid";

const DownloadableHeader = () => {
  return(
    <Grid container spacing={3} p={2}>
          {/* <Grid item xs={3}>
            <Box pt={4} >
              <Avatar
                alt="Vladimir Solovyov"
                src="https://avatars.githubusercontent.com/u/53788781?s=400&u=fd4ba406c620cb21c2a6f444312b5e022d0b5e4f&v=4"
                style={{ height: '13rem', width: '13rem'}}
              />
            </Box>
          </Grid> */}
          <Grid item xs={12}>
            <Box 
              display='flex' 
              justifyContent='space-between' 
              flexDirection='column'
              pt={1}
            >
              <DownloadableName  />
              <DownloadableLinks />
            </Box>
            {/* <Divider/> */}
            {/* <DownloadableInfoGrid /> */}
          </Grid>
      </Grid>
  )
}

export default DownloadableHeader;