import logo from '../assets/frankie-logo.png';
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp} from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-black flex flex-col items-center text-white py-8 mt-16">
            <div className="container flex flex-col md:flex-row justify-between items-center mx-auto px-4 gap-4">
                <div className="flex justify-center md:justify-start">
                    <a href="https://lime-guanaco-461084.hostingersite.com/">
                    <img src={logo} alt="Logo" className="h-24"/>
                    </a>
                </div>
                <div className="flex justify-center">
                    <ul className="grid grid-cols-1 md:grid-cols-4 list-none space-y-6 md:space-y-0 gap-4">
                        <li>
                            <a href="/home" className="text-sm text-gray-400 hover:text-white no-underline">Home</a>
                        </li>
                        <li>
                            <a href="/about"
                               className="text-sm text-gray-400 hover:text-white no-underline">About</a>
                        </li>
                        <li>
                            <a href="/services"
                               className="text-sm text-gray-400 hover:text-white no-underline">Services</a>
                        </li>
                        <li>
                            <a href="/contact"
                               className="text-sm text-gray-400 hover:text-white no-underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center space-x-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-white">
                        <FaFacebookF size={24}/>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-white">
                        <FaTwitter size={24}/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-white">
                        <FaInstagram size={24}/>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-white">
                        <FaLinkedinIn size={24}/>
                    </a>
                    <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-white">
                        <FaWhatsapp size={24}/>
                    </a>
                </div>
            </div>
            <p className="pt-8 text-gray-400 hover:text-white">&copy; {currentYear} <a href="https://lime-guanaco-461084.hostingersite.com/">Locs by
                Frankie</a>.
                All
                Rights Reserved.</p>
        </footer>
    );
}

export default Footer;