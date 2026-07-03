import Chip from './components/chip'
import Cards from './components/cards'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
    

      <div class="inline-flex rounded-base shadow-xs -space-x-px" role="group">
        <button type="button" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm px-3 py-2 focus:outline-none">
          Inicio
        </button>
        <button onClick={() => document.getElementById('SobreMi').scrollIntoView({ behavior: 'smooth' })} type="button" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm px-3 py-2 focus:outline-none">
          Sobre mí
        </button>
        <button onClick={() => document.getElementById('Proyectos').scrollIntoView({ behavior: 'smooth' })} type="button" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm px-3 py-2 focus:outline-none">
          Proyectos
        </button>
        <button onClick={() => document.getElementById('Skills').scrollIntoView({ behavior: 'smooth' })} type="button" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm px-3 py-2 focus:outline-none">
          Skills
        </button>
        <button onClick={() => document.getElementById('Experiencia').scrollIntoView({ behavior: 'smooth' })} type="button" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm px-3 py-2 focus:outline-none">
          Experiencia
        </button>
        <button onClick={() => document.getElementById('Contacto').scrollIntoView({ behavior: 'smooth' })} type="button" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm px-3 py-2 focus:outline-none">
          Contacto
        </button>
      </div>

      <h1> Hola soy Manuel Bajos Rivera</h1>
      <h2> Bienvenido a mi portafolio</h2>
      <Chip text="Desarrollo web" />
      <Chip text="Desarrollo móvil" color="green" />

      <div>

      </div>
      <div id="Proyectos">
        <h2>Proyectos</h2>
        <Cards 
          title="My Project" 
          subtitle="A simple project" 
          description="This is a brief description of the project." 
          link="https://example.com" 
          tecnologies={{"React": "blue", "Vite": "green", "TailwindCSS": "yellow"}} 
        />
      </div>
    </>
  )
}

export default App
