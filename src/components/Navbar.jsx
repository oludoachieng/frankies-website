import {Link} from 'react-router-dom';
import logo from "../assets/frankie-logo.png";

function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-black text-gray-400 p-8">
            <a href="https://lime-guanaco-461084.hostingersite.com/">
                <img src={logo} alt="Logo" className="h-20"/>
            </a>
            <ul className="flex gap-4 space-x-6">
                <li>
                    <Link to="/" className="hover:text-white">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="hover:text-white">About Us</Link>
                </li>
                <li>
                    <Link to="/services" className="hover:text-white">Services</Link>
                </li>
            </ul>
            <Link to="/contact">
                <button className="bg-white p-4 rounded-lg text-gray-700 hover:cursor-pointer hover:bg-blue-100">Contact</button>
            </Link>
        </nav>
    );
}

export default Navbar;