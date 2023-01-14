import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

import Button from "./components/Button";
import Accordion from './pages/Accordion';
const App = () => {
  const items = [
    {
      id: 0,
      label: 'Can I use React on a project',
      content: 'You can use React on any project you want'
    }, 
    {
      id: 1,
      label: 'Can I use JS on a project',
      content: 'You can use JS on any project you want'
    }, 
    {
      id: 2,
      label: 'Can I use CSS on a project',
      content: 'You can use CSS on any project you want'
    }, 
  ];

  return (
    <Accordion items={items} />
  );
}

export default App;