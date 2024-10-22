import SideBar from "./SideBar"


const Home = () => {
  return (
    <div className="flex flex-row h-screen ">
        <div className="basis-1/6 bg-gray-200">
            <SideBar></SideBar>
        </div>
        <div className="basis-5/6">
             Home
        </div>
    </div>
  )
}

export default Home