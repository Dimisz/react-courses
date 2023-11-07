import { Box, Typography } from "@mui/material";
import CertificationLink from "./CertificationLink";
import { certifications } from "../../data";


const CertificationsDownloadable = () => {
  const renderedLinks = certifications.map((cert) => {
    return(
      <CertificationLink key={cert.content} title={cert.title} content={cert.content} isDownloadable={true}/>
    )
  })
  
  return(
    <Box pl={4} pr={4} pb={2} pt={2}>
      <Typography variant='h5'>Courses & Certifications</Typography>
      <Box>
        {renderedLinks}
      </Box>
    </Box>
  )
}
export default CertificationsDownloadable;