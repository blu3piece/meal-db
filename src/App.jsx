import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Favorites from './components/Favorites'
import Search from './components/Search'
import Meals from './components/Meals'
import Modal from './components/Modal'
import { useGlobalContext } from './context'

function App() {
  const { showModal } = useGlobalContext();
  return (
    <main>
      <Search />
      {/* <Favorites /> */}
      <Meals />
      {showModal && <Modal />}
    </main>
  )
}

export default App
