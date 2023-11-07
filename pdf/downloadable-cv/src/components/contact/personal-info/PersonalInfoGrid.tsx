import { contactInfo } from "../data";
import PersonalInfoGridRow from "./PersonalInfoGridRow";
import { Grid } from "@mui/material";



const PersonalInfoGrid = () => {
  const renderedInfo = contactInfo.map((item) => {
    return(
      <PersonalInfoGridRow 
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