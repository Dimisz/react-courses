import { Grid, Typography } from "@mui/material";

const DownloadableName = () => {
  const fontSize = '3rem';
  return(
    <Grid item>
      <Typography align="center" sx={{ fontSize: fontSize }}>
        Vladimir Solovyov
      </Typography>
    </Grid>
  )
}

export default DownloadableName;