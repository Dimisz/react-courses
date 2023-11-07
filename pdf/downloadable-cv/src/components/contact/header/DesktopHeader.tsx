import { Avatar, Box, Divider, Grid } from "@mui/material"

import Name from "../personal-info/Name";
import Links from "../personal-info/Links";
import PersonalInfoGrid from "../personal-info/PersonalInfoGrid";



const DesktopHeader = () => {
  const flexDirection = 'row';

  return(
    <Grid container spacing={3} p={2}>
          <Grid item xs={3}>
            <Box pt={2}>
              <Avatar
                alt="Vladimir Solovyov"
                src="https://avatars.githubusercontent.com/u/53788781?s=400&u=fd4ba406c620cb21c2a6f444312b5e022d0b5e4f&v=4"
                style={{ height: '12rem', width: '12rem'}}
              />
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box 
              display='flex' 
              justifyContent='space-between' 
              flexDirection={flexDirection}
              pt={1}
            >
              <Name />
              <Links />
            </Box>
            <Divider/>
            <PersonalInfoGrid />
          </Grid>
      </Grid>
  )
}

export default DesktopHeader;