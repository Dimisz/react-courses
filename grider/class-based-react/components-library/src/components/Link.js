import React from 'react';
 // will replace standard <a> elements 
 // to avoid multiple requests
const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if(event.metaKey || event.ctrlKey){ // if CMD or Ctrl held hile clicking
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }
  return(
    <a 
        className={className} 
        href={href}
        onClick={onClick}
    >
      {children}
    </a>
  );
}

export default Link;