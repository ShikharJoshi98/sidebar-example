import { Route,Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import SideBar from "./components/SideBar"

function App() {
 

  return (
    <>
    <Navbar></Navbar>
    
    <div className="flex flex-row h-screen ">
        <div className="basis-1/3 md:basis-1/6 bg-gray-200">
            <SideBar></SideBar>
        </div>
        <div className="basis-2/3 md:basis-5/6">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/contact" element={ <Contact/> } />
        </Routes>
        </div>
    </div>
      
    
    </>
  )
}

export default App
