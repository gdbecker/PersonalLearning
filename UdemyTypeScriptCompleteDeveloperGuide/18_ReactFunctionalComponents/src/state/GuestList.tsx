import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const addGuest = () => {
    setGuests([...guests, name]);
    setName('');
  };
  
  return (
    <div>
      <h3>Guest List</h3>

      <ul>
        {guests.map((guest, index) => {
          return (
            <li key={index}>
              <p>{guest}</p>
            </li>
          );
        })}
      </ul>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addGuest}>Add Guest</button>
    </div>
  );
};

export default GuestList;