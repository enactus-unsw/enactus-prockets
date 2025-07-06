//To create a custom dropdown or to get one from a bank that is the question :(?  
import Dropdown, { DropdownItem } from 'components/organisms/Dropdown'
import ENACTUSLOGO from './Images/Enactus Logo.png'
import PROCKETSLOGO from './Images/Prockets Logo notext.png'

import { Link } from "react-router";

const Header = () => {
    //Model for dropdown boxes
    const aboutUsItems: DropdownItem[] = [
            { label: 'Our Mission', to: '/about-us/mission' },
            { label: 'Our Services', to: '/about-us/services' },
            { label: 'Our Products', to: '/about-us/products' },
    ];

    return (
        <header className="text-white font-sans select-none fixed top-0 w-full z-50 ">
            <nav className="mx-auto flex h-20 items-center justify-between text-lg text-black bg-white/75 ">
                <div className="flex items-center space-x-2 mx-2">
                    <img src={ENACTUSLOGO} className="h-8 w-auto max-w-[120px] object-contain"></img>
                    <img src={PROCKETSLOGO} className="h-12 w-auto max-w-[120px] object-contain"></img>
                    <a href="/"> ENACTUS | PROCKETS
                    </a>
                </div>
                <div className="flex space-x-16 mx-10">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Dropdown label="About Us" items={aboutUsItems} />
                    <Link to="/resources" className="hover:underline">Resources</Link>
                    <Link to="/support" className="hover:underline">Support</Link>  
                    <Link to="/contact-us" className="hover:underline">Contact Us</Link>  
                </div>
            </nav>
        </header>
    );
};

export default Header;