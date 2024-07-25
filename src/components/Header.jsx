import { Link } from "react-router-dom";
import schoolLogo from "../assets/SchoolLogo.png";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-[#8b0a0f] text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={schoolLogo} alt="Springdale Public School Logo" className="h-16" />
            <h1 className="text-3xl font-bold ml-4">Springdale Public School</h1>
          </Link>
          <div className="block md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <nav className={`bg-red-600 text-white ${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className="container mx-auto">
          <ul className="flex flex-col md:flex-row justify-between items-center py-2 px-4">
            <Link to="/about-us" className="hover:underline py-2 md:py-0">
              ABOUT
            </Link>
            <Link to="/admissions" className="hover:underline py-2 md:py-0">
              ADMISSIONS
            </Link>
            <Link to="/academics" className="hover:underline py-2 md:py-0">
              ACADEMICS
            </Link>
            <Link to="/faculty" className="hover:underline py-2 md:py-0">
              FACULTY
            </Link>
            <Link to="/student" className="hover:underline py-2 md:py-0">
              STUDENT LIFE
            </Link>
            <Link to="/gallery" className="hover:underline py-2 md:py-0">
              GALLERY
            </Link>
            <Link to="/contact-us" className="hover:underline py-2 md:py-0">
              CONTACT US
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

