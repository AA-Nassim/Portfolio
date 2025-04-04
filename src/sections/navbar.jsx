import React, { useState } from 'react';
import { navLinks } from '../constants';

const NavItems = () => {
    const handleClick = (scrollTarget) => {
        gsap.to(window, {
            duration: 5, 
            scrollTo: scrollTarget, 
            ease: "power2"
        })
    }
    
    return (
        <ul className='nav-ul'>
            {navLinks.map(({id, href, name}) => (
                <li key={id} className='nav-li'>
                    <a href={href} className='nav-li_a' onClick={() => this.handleClick(href)}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = (props) => {
    const [isOpen, SetIsOpen] = useState(false)

    const toggleMenu = () => SetIsOpen((prevIsOpen) => !prevIsOpen);

    return ( 
        <header className='fixed top-0 left-0 right-0 z-50 bg-black/90 h-[10%]'>
            <div className='max-w-7xl mx-auto h-full'>
                <div className='flex h-full justify-between items-center py-5 mx-auto c-space'>
                    <p className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                        Nassim
                    </p>
                    <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='Toggle Menu'>
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt='toggle' className='w-6 h-6'/>
                    </button>

                    <nav className='sm:flex hidden'>
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                <nav className='p-5'>
                    <NavItems />
                </nav>
            </div>
        </header>
     );
}
 
export default Navbar;