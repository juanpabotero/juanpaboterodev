import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Home } from './pages/Home'

function App() {

  return (
    <div className='app'>
      <Sidebar />
      <div className='actual_page'>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  )
}

export default App
