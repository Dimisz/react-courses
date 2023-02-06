import classNames from "classnames";

// import { useContext } from "react";
// import NavigationContext from "../context/navigation";
// replaced by a custom hook below

import useNavigation from "../hooks/useNavigation";

const Link = ({ to, children }) => {
  // const { navigate }  = useContext(NavigationContext);
  const { navigate } = useNavigation();
  
  const classes = classNames('text-blue-500');

  const handleClick = (event) => {
    if(event.metaKey || event.ctrlKey){
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return(
    <a className={classes} href={to} onClick={handleClick}>{children}</a>
  );
}

export default Link;