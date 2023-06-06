import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <p>
        <span>Sitio web </span>
        desarrollado por
        <span> Juan Pablo</span>
      </p>
      <p>
        Basado en la plantilla de
        <a
          href="https://astro-modern-personal-website.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Manuel Ernesto
        </a>
      </p>
    </footer>
  );
}
