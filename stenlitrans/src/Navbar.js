import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1> STENLYTRANS </h1>
            <div className="links">
             <Link to="/">Начало</Link>
             <Link to="/aboutus">Партньори</Link>
             <Link to="/aboutus">Контакти</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
