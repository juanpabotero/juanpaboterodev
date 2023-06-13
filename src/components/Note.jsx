import './Note.css';

export function Note({ logo, path, title }) {
  return (
    <a href={path} className="note">
      <img src={`src/assets/${logo}.svg`} alt="" />
      <h5>{title}</h5>
    </a>
  );
}
