// import { useContext } from "react";
// import NavigationContext from "../context/navigation";
// replaced by custom hook below

import useNavigation from "../hooks/useNavigation";

const Route = ({ path, children }) => {
  //const { currentPath } = useContext(NavigationContext);
  const { currentPath } = useNavigation();
  
  if(path === currentPath){
    return children;
  }

  return null;
}

export default Route;