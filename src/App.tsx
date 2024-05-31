
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import MainNav from './Components/MainNav/Navbar'
import Project from './Components/Projects/Project'
import Work from './Components/Work/Work'

function App() {

  return (
    <>
      <div className='app'>
        <MainNav/>
        <Home/>
        <About/>
        <Work/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
