import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Jon', age: 20 },
  { name: 'Michael', age: 20 },
]

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string, age: number } | undefined>(undefined);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const search = () => {
    const foundUser = users.find(user => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      <h3>User Search</h3>

      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <button onClick={search}>Find User</button>

      <div>
        <p>{user && user.name}</p>
        <p>{user && user.age}</p>
      </div>

    </div>
  );

}

export default UserSearch;