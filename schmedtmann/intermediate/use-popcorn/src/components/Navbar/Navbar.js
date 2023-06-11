// import { useState } from "react";
import Search from "./Search";
import Logo from "./Logo";
import NumResults from "./NumResults";

const Navbar = ({movies}) => {

  return(
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults movies={movies}/>
    </nav>
  )
}

export default Navbar;