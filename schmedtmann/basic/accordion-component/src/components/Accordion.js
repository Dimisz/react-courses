import { useState } from "react";
import AccordionItem from "./AccordionItem";
const faqs = [
  {
    id: 'q1',
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    id: 'q2',
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    id: 'q3',
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];


const Accordion = () => {
  const [openId, setOpenId] = useState(null);

  const renderedItems = faqs.map((q, i) => {
    return(
      <AccordionItem 
        key={q.id} 
        item={q} 
        index={i} 
        open={q.id === openId}
        setOpenId={setOpenId}
      />)
  })
  return(
    <div className="accordion">
      {renderedItems}
    </div>
  );
}

export default Accordion;