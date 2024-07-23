import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const reactDescriptions = ['Fundamental', 'Cricial', 'Core'];
function genRandomInt (max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header(){
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="styleized atom" />
      <h1>React Essentials</h1>
      <p>
         { reactDescriptions[genRandomInt(2)] } React concepts you will need for almost any app you are going to build.
      </p>
    </header>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <Header/> 
        <main>
          <h2>Time to get started!</h2>
        </main>
      </div>
    </>
  )
}

export default App
