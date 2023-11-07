import { Launch } from "@mui/icons-material";
import { Divider, Link, Typography, useMediaQuery, useTheme } from "@mui/material";

interface Props {
  title: string;
  content: string;
  isDownloadable?: boolean;
}

const CertificationLink = ({ title, content, isDownloadable=false }:Props) => {
  const theme = useTheme();
  const greaterThanSm = useMediaQuery(theme.breakpoints.up("sm"));
  const titleFontSize = greaterThanSm ? 'h6' : 'body1';
  const flexDirection = isDownloadable ? 'column' : 'row';
  const alignItems = isDownloadable ? 'left' : 'center';

  // pt={2} pb={2} pl={4} pr={4}
  return(
    <>
          <Link
            href={content}
            rel='noopener'
            target='_blank'
            underline="none"
            color='inherit'
            align="left"
            display='flex'
            flexDirection={flexDirection}
            justifyContent='space-between'
            alignItems={alignItems}
            pt={1}
            aria-label={`View credentials for ${title}`}
          >
            <Typography variant={titleFontSize}>
              {title}
            </Typography>
            <>
              {
                isDownloadable
                ?
                <Typography variant="body1" fontStyle='italic'>
                  {content}
                </Typography>
                :
                <Launch />
              }
            </>
          </Link>
        <Divider/>
    </>
  )
}

export default CertificationLink;