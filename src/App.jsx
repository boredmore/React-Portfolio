import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Components
import Pages from './Pages'


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/boredmore')
      .then(res => res.json())
      .then(user => setUser(user))
  }, []);

  console.log(user);

  return (
    <Pages user={user} />
  )
}

export default App
