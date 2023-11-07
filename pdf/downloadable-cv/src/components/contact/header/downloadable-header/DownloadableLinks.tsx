import { AlternateEmail, GitHub, Home, LinkedIn } from "@mui/icons-material";
import { Grid } from "@mui/material";
import DownloadableLinksRow from "./DownloadableLinkRow";

const DownloadableLinks = () => {
  const links = [
    { label: 'GitHub', content: 'https://github.com/Dimisz' , icon: <GitHub/> },
    { label: 'LinkedIn', content: 'https://www.linkedin.com/in/vladimir-solovyov-6b7136222/' , icon: <LinkedIn /> },
    { label: 'Address', content: 'Shenzhen, Guangdong, China', icon: <Home/> },
    // { label: 'Phone:', content: '136 9214 2331' },
    { label: 'Email', content: 'dimishenz@gmail.com', icon: <AlternateEmail/> },
    // { label: 'WeChat:', content: 'vladimirsolovyov87' },
  ];

  const renderedHeader = links.map((link) => {
    return(
      <DownloadableLinksRow 
        key={link.content}
        content={link.content} 
        label={link.label}
        icon={link.icon}
      />
    )
  })
  return(
    <Grid 
      container xs={12}
      display='flex' 
      // flexDirection='column'
      alignContent='center' 
      justifyContent='space-between'
    >
      {renderedHeader}
    </Grid>
  );
}

export default DownloadableLinks;