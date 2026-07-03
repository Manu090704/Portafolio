import Chip from './components/chip'
import Cards from './components/cards'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
    <h1> Hola soy Manuel Bajos Rivera</h1>
    <h2> Bienvenido a mi portafolio</h2>
    <Chip text="React" />
    <Cards 
      title="My Project" 
      subtitle="A simple project" 
      description="This is a brief description of the project." 
      link="https://example.com" 
      tecnologies={{"React": "blue", "Vite": "green", "TailwindCSS": "yellow"}} 
    />
    </>
  )
}

export default App
