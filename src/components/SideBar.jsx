import { Link } from "react-router-dom"
const SideBar = () => {
  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="border text-center border-blue-500 p-1 cursor-pointer hover:text-blue-500 duration-200 hover:border-2">
        <Link to="/contact">Contact</Link>
      </div>
      <div  className="border text-center border-blue-500 p-1 cursor-pointer hover:text-blue-500 duration-200 hover:border-2">
      <Link to="/">Home</Link>
      </div>
      <div className="border text-center border-blue-500 p-1 cursor-pointer hover:text-blue-500 duration-200 hover:border-2">
      <Link to="/about" >About</Link>
      </div>
    </div>
  )
}

export default SideBar