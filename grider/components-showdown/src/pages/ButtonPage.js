import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

import Button from "../components/Button";

const ButtonPage = () => {
  
  return (
    <div>
      <div>
        <Button success rounded className='mb-5'>
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
       <Button danger outline>
        <GoCloudDownload />
        Second Button
      </Button>
      </div>
      <div>
        <Button primary rounded outline>
          <GoDatabase />
          Third Button
        </Button>
      </div>
      <div>
          <Button warning rounded>Fourt Button</Button>
      </div>
      <div>
          <Button secondary>Fourt Button</Button>
      </div>
    </div>
  );
}

export default ButtonPage; 