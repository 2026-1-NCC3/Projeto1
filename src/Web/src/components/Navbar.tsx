import { Link } from "react-router-dom"
import logo from "../assets/logo_maya.png"

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#01577A" }} className="px-4 py-2 d-flex align-items-center justify-content-between">
      
      <div className="d-flex align-items-center gap-5">
        <img src={logo} alt="Maya Yamamoto RPG" style={{ height: "40px" }} />
        
        <div className="d-flex gap-4">
          <Link to="/patients" style={{ color: "white", textDecoration: "none", fontWeight: "500" }}>
            HOME/PACIENTES
          </Link>
          <Link to="/videos" style={{ color: "white", textDecoration: "none", fontWeight: "500" }}>
            VIDEOS
          </Link>
          <Link to="/trails" style={{ color: "white", textDecoration: "none", fontWeight: "500" }}>
            TRILHAS
          </Link>
        </div>
      </div>

      <Link to="/users" style={{ color: "white", textDecoration: "none", fontWeight: "500" }}>
        ADMs
      </Link>

    </nav>
  )
}

export default Navbar