import { Projects } from '../components/Projects';
import './Home.css';

export function Home() {
  return (
    <div className="home">
      <p className="home_greeting">Hola👋</p>
      <h1>Soy Juan Pablo</h1>
      <h2>Desarrollador Frontend</h2>
      <p className="description">
        +2 años de experiencia desarrollando con tecnologías web. Apasionado por construir experiencias de usuario increíbles!
      </p>

      <h3>Últimos proyectos</h3>
      <Projects />
    </div>
  );
}
