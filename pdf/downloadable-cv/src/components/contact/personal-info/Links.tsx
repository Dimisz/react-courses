import { GitHub, LinkedIn } from "@mui/icons-material";
import { Grid } from "@mui/material";
import LinksRow from "./LinksRow";


const Links = () => {
  const links = [
    { label: 'GitHub', content: 'https://github.com/Dimisz' , icon: <GitHub/> },
    { label: 'LinkedIn', content: 'https://www.linkedin.com/in/vladimir-solovyov-6b7136222/' , icon: <LinkedIn /> },
  ];

  const alignContent = 'center';
  const justifyContent = 'right';

  const renderedHeader = links.map((link) => {
    return(
      <LinksRow 
        key={link.content}
        content={link.content} 
        label={link.label}
        icon={link.icon} 
      />
    )
  })
  return(
    <Grid 
      container xs={12} md={4}
      display='flex' 
      alignContent={alignContent} 
      justifyContent={justifyContent}
    >
      {renderedHeader}
    </Grid>
  );
}

export default Links;