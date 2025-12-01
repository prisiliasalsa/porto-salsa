import { List } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = () => {
    const [IsOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const scrollToSection = (id) => {
        const section = document.querySelector(id);
        section?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false); // close menu
    };

    return (
        <header id="navbar" className="fixed top-0 left-0 w-full flex items-center z-20 h-20 bg-red-100 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between relative">
                    
                    {/* Logo */}
                    <div className="px-4">
                        <button 
                            onClick={() => scrollToSection('#home')}
                            className="font-bold text-2xl text-rose-900 block py-6"
                        >
                            Salsabila's page
                        </button>
                    </div>

                    {/* Menu Button */}
                    <div className="flex items-center px-8">
                        <button 
                            id="hamburger"
                            type="button"
                            onClick={toggleMenu}
                            className="block absolute right-2"
                        >
                            <List />
                        </button>

                        {/* Mobile Menu */}
                        {IsOpen && (
                            <nav
                                id="nav-menu"
                                className="absolute py-5 bg-red-50 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full"
                            >
                                <ul className="block">
                                    <li className="group">
                                        <button
                                            onClick={() => scrollToSection('#home')}
                                            className="text-base text-rose-900 py-2 mx-8 flex group-hover:text-rose-600"
                                        >
                                            Home
                                        </button>
                                    </li>
                                    <li className="group">
                                        <button
                                            onClick={() => scrollToSection('#about')}
                                            className="text-base text-rose-900 py-2 mx-8 flex group-hover:text-rose-600"
                                        >
                                            About
                                        </button>
                                    </li>
                                    <li className="group">
                                        <button
                                            onClick={() => scrollToSection('#experience')}
                                            className="text-base text-rose-900 py-2 mx-8 flex group-hover:text-rose-600"
                                        >
                                            Experience
                                        </button>
                                    </li>
                                    <li className="group">
                                        <button
                                            onClick={() => scrollToSection('#contact')}
                                            className="text-base text-rose-900 py-2 mx-8 flex group-hover:text-rose-600"
                                        >
                                            Contact
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
