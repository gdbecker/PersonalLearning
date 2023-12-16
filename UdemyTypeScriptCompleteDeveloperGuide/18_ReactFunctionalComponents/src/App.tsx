import './App.css'
import GuestList from './state/GuestList';
import UserSearch from './refs/UserSearch';
import EventComponent from './events/EventComponent';

export default function App() {
  return (
    <main>
      <GuestList />
      <br />
      <UserSearch />
      <br />
      <EventComponent />
    </main>
  )
}