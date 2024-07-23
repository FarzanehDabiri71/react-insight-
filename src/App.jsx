import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Header(){
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="styleized atom" />
      <h1>React Essentials</h1>
      <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iusto reprehenderit ducimus laboriosam autem illum unde harum nemo aut doloribus!
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
