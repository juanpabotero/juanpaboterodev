import './Navbar.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className='navbar_container'>
        <div className="navbar_hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>Juan Pablo</div>
        <div>Algo mas</div>
      </div>
    </nav>
  );
}
