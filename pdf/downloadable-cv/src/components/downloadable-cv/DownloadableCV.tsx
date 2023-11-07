import EducationDownloadable from "../contact/education/EducationDownloadable";
import CertificationsDownloadable from "../contact/education/certifications-links/CertificationsDownloadable";
import LanguagesProficiencyDownloadable from "../contact/languages/LanguagesProficiencyDownloadable";
import WorkExperienceDownloadable from "../contact/experience/WorkExperienceDownloadable";
import SkillsDownloadable from "../contact/skills/SkillsDownloadable";
import DownloadableHeader from "../contact/header/downloadable-header/DownloadableHeader";
import { Button, Paper } from "@mui/material";
import { usePDF } from "react-to-pdf";


// export const { toPDF, targetRef } = usePDF({filename: 'myCv.pdf'});

const DownloadableCV = () => {
  const { toPDF, targetRef } = usePDF({filename: 'ReactDev_Solovyov.pdf'});

  return(
    <div>
      <Paper ref={targetRef} sx={{ pt: 2 }}>
        <DownloadableHeader/>
        <WorkExperienceDownloadable/>
        <EducationDownloadable/>
        {/* <CertificationsDownloadable /> */}
        <SkillsDownloadable/>
        <LanguagesProficiencyDownloadable />
      </Paper>
      <Button
        onClick={() => toPDF()}
        variant='contained'
        fullWidth
      >
        Download as PDF
      </Button>
    </div>
  );
}

export default DownloadableCV;