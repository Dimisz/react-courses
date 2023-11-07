import { Box, Link, Typography } from "@mui/material"
import { ReactNode } from "react";

interface Props {
  content: string;
  label: string;
  icon: ReactNode;
}

const DownloadableLinksRow = ({ content, label, icon }: Props) => {
  return(
        // <Link 
        //   href={content} 
        //   rel='noopener' 
        //   target='_blank' 
        //   underline="none" 
        //   color='inherit' 
        //   align={align}
        //   pl={pl}
        //   aria-label={`View ${label} profile`}
        // >
          <Box display='flex' alignItems='flex-start' flexDirection='column' justifyContent='center'>
            <Box display='flex' alignItems='center'>
              {icon}
              <Typography variant='h6' pl={1}>{label}:</Typography>
            </Box>
            <Typography variant='body1' fontStyle='italic'>{content}</Typography>
          </Box>
        // </Link>

  );
}

export default DownloadableLinksRow;