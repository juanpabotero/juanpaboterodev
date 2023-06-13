import './Navbar.css';

export function Navbar() {
  const toggleSidebar = () => {
    const sidebar = document.querySelector('.sidebar-wrapper');
    sidebar.classList.toggle('active');
  };

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="navbar_hamburger" onClick={toggleSidebar}>
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
