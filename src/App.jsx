import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Components for Navbar, Home and About Us
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Navbar/> {/* Display Navbar at the top */}
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<AboutUs/>}/>
                        <Route path="/services" element={<Services/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </div>
                <Footer/> {/* Display Footer at the bottom */}
            </div>
        </Router>
    );
}

export default App;