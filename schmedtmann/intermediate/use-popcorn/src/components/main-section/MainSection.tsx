import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainSection = ({ children }: Props) => {
  return(
    <main className="main">
        {children}
      </main>
  );
}
export default MainSection;