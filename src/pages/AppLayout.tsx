import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation"

const AppLayout = () => {
  return (
    <div className="app_container w-100 h-100% flex gap-4">
        <div className="navigation_container w-fit h-fit">
        <Navigation/>
        </div>
        <div className="section w-full h-100"> 
            <Outlet/>
        </div>
    </div>
  )
}

export default AppLayout