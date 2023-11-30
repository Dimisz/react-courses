import './App.css'
import EventComponent from './events/EventComponent'
import UserSearchWithRef from './refs/UserSearchWithRef'
import GuestList from './state/GuestList'
import UserSearch from './state/UserSearch'

const App = () => {
  return (
    <>
      <UserSearchWithRef />
      <EventComponent />
      <UserSearch/>
      <GuestList />
    </>
  )
}

export default App
