import { Link } from "react-router-dom";
import "./NavBar.css"
const NavBar = () => {
  return (
    <div className="navbar">
      <Link to='/'>HOME</Link>
      <div></div>
      <Link to='/about'>SOBRE</Link>
      <div></div>
      <Link to='/data'>DATA</Link>
    </div>
  )
}

export default NavBar
