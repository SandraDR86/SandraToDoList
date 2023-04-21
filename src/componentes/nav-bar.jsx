import { Link } from "react-router-dom"
import { ReactComponent as LogoBudget } from "../assets/crown.svg"
import "./nav-bar.css"

const NavBar = () => {
    return (
        <div className="navigation">
            <Link className="logo-container" to="/"> <LogoBudget/> </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/tareas"> Tareas </Link>
                <Link className="nav-link" to="/"> Presupuesto </Link>
                
            </div>

        </div>
    )
}

export default NavBar