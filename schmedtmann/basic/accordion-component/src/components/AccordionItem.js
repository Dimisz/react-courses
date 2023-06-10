import { useState } from "react";
const AccordionItem = ({item, index, open, setOpenId}) => {
  // const [open, setOpen] = useState(false);
  const toggle = () => {
    if(open){
      setOpenId(null);
    }
    else{
      setOpenId(item.id);
    }
  }

  return(
      <div 
        onClick={toggle}
        className={`item ${open ? 'open' : ''}`}
      >
        <p className="number">{index < 9 ? `0${index+1}` : (index+1)}</p>
        <p className="title">{item.title}</p>
        <p className="icon">{open ? '-' : ' +'}</p>
        {
        open &&
        <div className="content-box">
          {item.text}
        </div>
      }
      </div>
  )
}

export default AccordionItem;