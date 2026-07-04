import Chip from './components/chip'
import Cards from './components/cards'
import mail from './assets/mail.svg'
import phone from './assets/phone.svg'
import heroImg from './assets/hero.png'
import './App.css'

const navItems = [
  { label: 'Inicio', id: 'Inicio' },
  { label: 'Sobre mi', id: 'SobreMi' },
  { label: 'Proyectos', id: 'Proyectos' },
  { label: 'Skills', id: 'Skills' },
  { label: 'Soft Skills', id: 'SoftSkills' },
  { label: 'Experiencia', id: 'Experiencia' },
  { label: 'Contacto', id: 'Contacto' },
]

const projects = [
  {
    title: 'Workcells HR Optimization System',
    subtitle: 'Cliente: Nuclea',
    description:
      'Desarrollé una plataforma web para optimizar los flujos de trabajo de Recursos Humanos.',
    link: 'https://github.com/EdCanCe/WorkCells',
    tecnologies: { HTML: 'blue', JavaScript: 'green', AWS: 'gray', MySQL: 'blue' },
  },
  {
    title: 'NefroApp',
    subtitle: 'Cliente: Nefrovida',
    description:
      'Diseñé y desarrollé una app móvil y web para una organización sin fines de lucro, optimizando sus procesos operativos con un enfoque en usabilidad y eficiencia.',
    link: 'https://github.com/Nefrovida/IOS',
    tecnologies: { React: 'blue', Swift: 'green', Node: 'green', PostgreSQL: 'blue', Hostinger: 'blue' },
  },
  {
    title: 'Tochan',
    subtitle: 'RCHQ',
    description:
      'Diseñé y desarrollé un departamento de software, creando soluciones para empresas y proyectos como Tochan para mejorar el control administrativo.',
    link: 'https://github.com/AztlanConsulting/RCHQ-Back',
    tecnologies: { React: 'blue', Node: 'green', PostgreSQL: 'blue', Hostinger: 'gray' },
  },
]

const skills = {
  'React': 'blue',
  'JavaScript': 'green',
  'Tailwind CSS': 'gray',
  'Responsive design': 'gray',
  'C++': 'green',
  'Figma': 'gray',
  'Git': 'gray',
  'APIs REST': 'gray',
  'Python': 'green',
  'SQL': 'green',
  'AWS': 'gray',
  'Linux': 'gray',
  'Java': 'green',
  'HTML': 'gray',
  'Matlab': 'green',
  'Swift': 'green',
  'Unity': 'blue',
  'Express.js': 'blue',
  'Spring Boot': 'blue',
  'Angular': 'blue',
  'Microsoft Office': 'gray',
  'Google Workspace': 'gray',
  'UML': 'gray',
  'GitHub': 'gray',
}

const SoftSkills = {
  'Trabajo en equipo': 'blue',
  'Resolución de problemas': 'green',
  'Comunicación efectiva': 'yellow',
  'Adaptabilidad': 'gray',
  'Pensamiento crítico': 'blue',
  'Gestión del tiempo': 'green',
  'Liderazgo': 'blue',
}

const experiences = [
            { title: 'Software Developer Intern', subtitle: 'GE Aerospace', 
              description: 'Desarrollé herramientas internas para mejorar el rendimiento del sistema y la eficiencia operativa.' },
            { title: 'Web Developer', subtitle: 'Casa Yoto', 
              description: 'Se desarrolló un sitio web para proporcionar información pública segura y accesible para la institución.' },
            { title: 'Associate', subtitle: 'Pizza Hut', 
              description: 'Brindé atención al cliente y di soporte a las operaciones en un entorno dinámico.' },
          ]

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function App() {
  return (
    <main id="Inicio" className="min-h-screen overflow-hidden bg-[#080914] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(84,214,255,0.18),transparent_28%),radial-gradient(circle_at_84%_8%,rgba(168,85,247,0.22),transparent_25%),linear-gradient(135deg,#080914_0%,#111827_48%,#0f172a_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:52px_52px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080914]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <button
            type="button"
            onClick={() => scrollToSection('Inicio')}
            className="text-left text-sm font-semibold tracking-[0.22em] text-cyan-200 uppercase"
          >
            Inicio
          </button>

          <div className="hidden items-center rounded-full border border-white/10 bg-white/8 p-1 shadow-2xl shadow-black/20 md:flex">
            {navItems.slice(1).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
              >
                {item.label}
              </button>
            ))}
          </div>

          <a
            href="mailto:manuel@example.com"
            className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
          >
            Hablemos
          </a>
        </nav>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
        <div className="space-y-8">
          <div className="flex flex-wrap gap-2">
            <Chip text="Desarrollo web" />
            <Chip text="Desarrollo movil" color="green" />
            <Chip text="UI funcional" color="yellow" />
          </div>

          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">
              Manuel Bajos Rivera
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
              Desarrollo interfaces claras, modernas y faciles de usar.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Bienvenido a mi portafolio. Aqui reuno proyectos, habilidades y
              experiencia con un enfoque en productos digitales bien pensados,
              responsive y listos para crecer.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToSection('Proyectos')}
              className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-200"
            >
              Ver proyectos
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('Contacto')}
              className="rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/14"
            >
              Contacto
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="glass-panel aspect-square overflow-hidden p-8">
            <img
              src={heroImg}
              alt="Capas flotantes de interfaz"
              className="h-full w-full object-contain drop-shadow-[0_24px_60px_rgba(34,211,238,0.22)]"
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-3xl border border-white/12 bg-slate-950/70 p-5 shadow-2xl backdrop-blur-xl">
            <p className="text-sm text-slate-300">Disponible para colaborar en</p>
            <p className="mt-1 text-xl font-bold text-white">Frontend, prototipos y experiencias web</p>
          </div>
        </div>
      </section>

      <section id="SobreMi" className="section-band">
        <div className="section-grid">
          <div>
            <p className="section-kicker">Sobre mi</p>
            <h2 className="section-title">Construyo con mirada de diseno y criterio tecnico.</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              Me gusta convertir ideas en interfaces ordenadas, visualmente
              atractivas y comodas de navegar. Trabajo cuidando tanto la
              estructura del codigo como la experiencia de quien usa el producto.
            </p>
            <p>
              Mi enfoque mezcla componentes reutilizables, responsive design y
              decisiones visuales con intencion: buen contraste, jerarquia clara
              y pequenos detalles que hacen que una pagina se sienta terminada.
            </p>
          </div>
        </div>
      </section>

      <section id="Proyectos" className="mx-auto max-w-6xl px-5 py-24">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Proyectos</p>
            <h2 className="section-title">Trabajo seleccionado</h2>
          </div>
          <p className="max-w-xl text-slate-300">
            Una muestra compacta de proyectos pensada para que se pueda escanear
            rapido: problema, solucion y tecnologias principales.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <Cards key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="Skills" className="section-band">
        <div className="mx-auto max-w-6xl px-5">
          <p className="section-kicker">Habilidades técnicas</p>
          <div className="mt-4 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <h2 className="section-title">Herramientas para llevar una idea de boceto a producto.</h2>
            <div className="flex flex-wrap gap-3">
              <div className="flex w-full flex-wrap gap-2">
                <Chip text="Lenguajes de programación" color="green" />
                <Chip text="Frameworks y librerias" color="blue" />
                <Chip text="Herramientas y otros" color="gray" />
              </div>
              {Object.entries(skills).map(([skill, color]) => (
                <Chip
                  text={skill}
                  color={color}
                  key={skill}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="SoftSkills" className="section-band">
        <div className="mx-auto max-w-6xl px-5">
          <p className="section-kicker">Habilidades blandas</p>
          <div className="mt-4 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <div className="flex w-full flex-wrap gap-2">
              {Object.entries(SoftSkills).map(([skill, color]) => (
                <Chip
                  text={skill}
                  color={color}
                  key={skill}
                />
              ))}
            </div>
            <h2 className="section-title">Herramientas para un desarrollo colaborativo y eficiente.</h2>
          </div>
        </div>
      </section>

      <section id="Experiencia" className="mx-auto max-w-6xl px-5 py-24">
        <p className="section-kicker">Experiencia</p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {experiences.map((experience, index) => (
            <Cards
              key={index}
              title={experience.title}
              subtitle={experience.subtitle}
              description={experience.description}
            />
          ))}
        </div>
      </section>

      <section id="Contacto" className="mx-auto max-w-6xl px-5 pb-16">
        <div className="rounded-[2rem] border border-white/12 bg-white/8 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12">
          <p className="section-kicker">Contacto</p>
          <div className="mt-4 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="section-title">Creamos algo juntos?</h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                Si tienes una idea, proyecto o practica que quieras convertir en
                una experiencia web, podemos darle forma desde aqui.
              </p>
            </div>
            <a
              href="mailto:mbajosr@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100"
            >
              <img src={mail} alt="mail" className="h-5 w-5" />
            </a>
            <a
              href="tel:442-504-3544"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100"
            >
              <img src={phone} alt="phone" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
    
  )
}

export default App
