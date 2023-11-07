import { Avatar, Box, Grid } from "@mui/material"
import PersonalInfoGrid from "../personal-info/PersonalInfoGrid"
import Name from "../personal-info/Name"
import Links from "../personal-info/Links"

const MobileHeader = () => {
  return(
    <Grid container spacing={3} pl={2} pr={2}>
      <Grid item xs={12} display='flex' justifyContent='space-between'>
          <Avatar
            alt="Vladimir Solovyov"
            src="https://avatars.githubusercontent.com/u/53788781?s=400&u=fd4ba406c620cb21c2a6f444312b5e022d0b5e4f&v=4"
            sx={{height: '6rem', width: '6rem'}}
          />
          <Box display='flex' flexDirection='column'>
            <Name/>
            <Links/>
          </Box>
      </Grid>
      <Grid item xs={12}>
        <PersonalInfoGrid />
      </Grid>
    </Grid>
  )
}

export default MobileHeader;