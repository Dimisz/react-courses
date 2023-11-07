
import { Grid } from "@mui/material";
import { contactInfo } from "../../data";
import DownloadableGridRow from "./DownloadableGridRow";



const PersonalInfoGrid = () => {
  const renderedInfo = contactInfo.map((item) => {
    return(
      <DownloadableGridRow 
        key={item.label}
        label={item.label} 
        content={item.content} 
      />
    )
  });
  return(
    <Grid container>
      {renderedInfo}
    </Grid>
  )
}

export default PersonalInfoGrid;