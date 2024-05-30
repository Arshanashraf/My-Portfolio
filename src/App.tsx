
import './App.css'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import MainNav from './Components/MainNav/Navbar'
import Work from './Components/Work/Work'

function App() {

  return (
    <>
      <div className='app'>
        <MainNav/>
        <Home/>
        <About/>
        <Work/>
      </div>
    </>
  )
}

export default App
