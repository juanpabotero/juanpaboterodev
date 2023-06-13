import { Project } from '../components/Project';
import { projects } from '../constants/projects';
import './Projects.css';

export function Projects() {
  return (
    <section className="projects">
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  );
}
