import { Route,Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/navbar"

function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Route>
    </Routes>
    </>
  )
}

export default App
