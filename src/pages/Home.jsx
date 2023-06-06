import { Project } from '../components/Project';
import { projects } from '../constants/projects';
import './Home.css';

export function Home() {
  return (
    <div className="home">
      <p className='home_greeting'>Hola👋</p>
      <h1>Soy Juan Pablo</h1>
      <h2>Desarrollador Frontend</h2>
      <p className="description">
        +2 años de experiencia desarrollando con tecnologias web. Apasionado por la
        tecnología y construir experiencias de usuario increíbles!
      </p>

      <h3>Últimos proyectos</h3>
      <section className="projects">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </section>
    </div>
  );
}
