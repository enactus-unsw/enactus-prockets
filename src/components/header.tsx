//To create a custome dropdown or to get one from a bank that is the question :(?  
import Dropdown, { DropdownItem } from 'components/organisms/Dropdown'
import ENACTUSLOGO from './Images/Enactus Logo.png'
import PROCKETSLOGO from './Images/Prockets Logo notext.png'

const Header = () => {
        //Model for dropdown boxes
        const aboutUsItems: DropdownItem[] = [
                { label: 'Our Mission', href: '/about-us/mission' },
                { label: 'Our Service', href: '/about-us/service' },
                { label: 'Our Product', href: '/about-us/product' },
        ];

        return (
                <header className="text-white font-sans select-none ">
                        <nav className="mx-auto flex h-20 items-center justify-between text-lg text-black bg-white/100 ">
                                <div className="flex items-center space-x-2 mx-2">
                                        <img src={ENACTUSLOGO} className="h-8 w-auto max-w-[120px] object-contain"></img>
                                        <img src={PROCKETSLOGO} className="h-12 w-auto max-w-[120px] object-contain"></img>
                                        <a href="/"> ENACTUS | PROCKETS
                                        </a>
                                </div>
                                <div className="flex space-x-16 mx-2  ">
                                        <a href="/home" className="hover:underline">Home</a>
                                        <Dropdown label="About us" items={aboutUsItems} />
                                        <Dropdown label="Resources" items={aboutUsItems} />
                                        <Dropdown label="Support" items={aboutUsItems} />
                                        <a href="/contact-us" className="hover:underline ">Contact us </a>
                                </div>

                        </nav>
                </header>
        );
};

export default Header;