import Navigation from "./component/Navigation"
import Logo from "./component/Logo.jsx"
function NavBar() {
  return (
    <div className="nav bg-nav-black flex flex-row justify-between items-center w-full px-4 lg:px-20 md:px-14 py-5 backdrop-blur-sm fixed top-0 border-b-1 ">
         <Logo/>
    <Navigation/>
    </div>

  )
}

export default NavBar