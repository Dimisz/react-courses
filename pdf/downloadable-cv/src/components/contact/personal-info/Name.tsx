import { Grid, Typography } from "@mui/material";

const Name = () => {
  return(
    <Grid item>
      <Typography align="left" sx={{ fontSize: {xs: '1.4rem', sm: '2.5rem', md: '3rem'} }}>
        Vladimir Solovyov
      </Typography>
    </Grid>
  )
}

export default Name;