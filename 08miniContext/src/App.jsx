
import './App.css'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/Profile'
function App() {
  


  return (
    <UserContextProvider>
      <h1>Muazam qayyum</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
