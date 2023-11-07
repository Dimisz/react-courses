import CV from './downloadable-cv/ReactDevCV_VladimirSolovyov.pdf';

import { Button, Link, Paper, useMediaQuery, useTheme } from "@mui/material";
// import { usePDF } from "react-to-pdf";

import MobileHeader from "./header/MobileHeader";
import EducationAccordion from "./education/EducationAccordion";
import LanguagesProficiency from "./languages/LanguagesProficiency";
import Certifications from "./education/certifications-links/Certifications";
import WorkExperience from "./experience/WorkExperience";
import Skills from "./skills/Skills";
// import DownloadableCV from "./downloadable-cv/DownloadableCV";
import DesktopHeader from "./header/DesktopHeader";


const ContactPage = () => {
  // const { toPDF, targetRef } = usePDF({filename: 'ReactDevCV_VladimirSolovyov.pdf'});
  //  onClick={() => toPDF()}
  const theme = useTheme();
  const greaterThanMd = useMediaQuery(theme.breakpoints.up("md"));
  

  return(
    <>
      {/* <Paper ref={targetRef} sx={{ pt: 2, position: 'fixed', bottom: 1000 
        }}>
        <DownloadableCV/>
      </Paper> */}
      
      <Paper sx={{ pt: 2 }}>
        {
          greaterThanMd
          ?
          <DesktopHeader/>
          :
          <MobileHeader/>
        }
        <WorkExperience />
        <EducationAccordion/>
        <Certifications/>
        <Skills/>
        <LanguagesProficiency/>
      </Paper>
      
      <Link 
        href={CV}
        download='ReactDevCV_VladimirSolovyov'
        target='_blank'
        rel='noreferrer'
      >
        <Button
          variant='contained'
          fullWidth
        >
          Download as PDF
        </Button>
      </Link>
    </>
  );
}

export default ContactPage;