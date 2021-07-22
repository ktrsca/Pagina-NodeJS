import {Link} from 'react-router-dom';
import "./Navbar.css";


function Navbar() {
    return(
        <nav className="container-lg navbar bg-white">
            <h4><Link className="link" to="/Home">
                HOME 
            </Link></h4>

            <h4><Link className="link" to="/Notes">
                NOTES 
            </Link></h4>

            <h4><Link className="link" to="/Ej1">
                EJ1
            </Link></h4>

            <h4><Link className="link" to="/Ej2">
                EJ2
            </Link></h4>

            <h4><Link className="link" to="/Ej3">
                EJ3
            </Link></h4>
            
        </nav>
    )
};

export default Navbar;