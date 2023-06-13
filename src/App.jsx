import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { DevNotes } from './pages/DevNotes';
import { Home } from './pages/Home';
import { ProjectsPage } from './pages/ProjectsPage';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="actual_page">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/notas" element={<DevNotes />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
