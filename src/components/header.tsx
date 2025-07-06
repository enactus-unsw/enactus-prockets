import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown, { DropdownItem } from 'components/organisms/Dropdown';
import ENACTUSLOGO from './Images/Enactus Logo.png';
import PROCKETSLOGO from './Images/Prockets Logo notext.png';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const aboutUsItems: DropdownItem[] = [
    { label: 'Our Mission', to: '/about-us/mission' },
    { label: 'Our Services', to: '/about-us/services' },
    { label: 'Our Products', to: '/about-us/products' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 select-none font-sans">
      <nav className="mx-auto flex h-20 items-center justify-between px-4 md:px-8 text-black bg-white/75 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <img src={ENACTUSLOGO} className="h-8 w-auto max-w-[120px] object-contain" alt="Enactus" />
          <img src={PROCKETSLOGO} className="h-12 w-auto max-w-[120px] object-contain" alt="Prockets" />
          <a href="/" className="font-bold hidden sm:inline">ENACTUS | PROCKETS</a>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Dropdown label="About Us" items={aboutUsItems} />
          <Link to="/events" className="hover:underline">Events</Link>
          <Link to="/support" className="hover:underline">Support</Link>
          <Link to="/contact-us" className="hover:underline">Contact Us</Link>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(prev => !prev)} aria-label="Toggle Menu">
            <MenuIcon></MenuIcon>
          </button>
        </div>
      </nav>

      {/* Mobile Menu  */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-200 shadow-lg z-40">
          <div className="flex flex-col items-start px-6 py-4 space-y-4 text-lg">
            <Link to="/" onClick={() => setMenuOpen(false)} className="w-full hover:underline">
              Home
            </Link>
            <div className="w-full">
              <p className="font-semibold mb-2">About Us</p>
              {aboutUsItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full pl-4 text-base hover:underline"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link to="/events" onClick={() => setMenuOpen(false)} className="w-full hover:underline">
              Events
            </Link>
            <Link to="/support" onClick={() => setMenuOpen(false)} className="w-full hover:underline">
              Support
            </Link>
            <Link to="/contact-us" onClick={() => setMenuOpen(false)} className="w-full hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
