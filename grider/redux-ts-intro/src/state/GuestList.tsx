import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const handleAddGuest = () => {
    setGuests([...guests, name]);
    setName('');
  }

  const renderedGuests = guests.map((guest: string) => {
    return <ul key={guest}>{guest}</ul>
  });

  return(
    <div>
      <h3>Guest List</h3>
      <ul>
        {renderedGuests}
      </ul>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddGuest}>Add Guest</button>
    </div>
  );
}

export default GuestList;