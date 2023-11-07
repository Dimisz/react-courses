import { Link } from "@mui/material"
import { ReactNode } from "react";

interface Props {
  content: string;
  label: string;
  icon: ReactNode | null;
}

const LinksRow = ({ content, label, icon }: Props) => {
  return(
        <Link 
          href={content} 
          rel='noopener' 
          target='_blank' 
          underline="none" 
          color='inherit' 
          align='right'
          pl={3}
          aria-label={`View ${label} profile`}
        >
          { icon }
        </Link>

  );
}

export default LinksRow;