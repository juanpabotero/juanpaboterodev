import './App.css'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'
import { Home } from './pages/Home'

function App() {

  return (
    <div className='app'>
      <Sidebar />
      <div className='actual_page'>
        <Home />
        <Footer />
      </div>
    </div>
  )
}

export default App
