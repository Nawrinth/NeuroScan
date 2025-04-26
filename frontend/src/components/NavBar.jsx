import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // React icons

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `w-full fixed top-0 left-0 z-50 shadow transition-all duration-300 ${
    scrolled
      ? 'bg-gradient-to-r from-cyan-700 via-blue-600 to-sky-500 text-white'
      : 'bg-transparent text-gray-800'
  }`;

  const underlineColor = scrolled ? 'bg-white' : 'bg-black';

  const navItems = ['Home', 'About', 'Upload', 'Results' ,'FAQ'];

  return (
    <div className={navClasses}>
      <div className="flex items-center justify-evenly h-16 px-6 md:px-12">
        <h2 className="text-2xl font-bold">NeuroScan</h2>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-12 font-medium  text-lg">
            {navItems.map((item) => (
              <li key={item} className="relative py-4">
                <a href={"#"+item} className="relative group">
                  {item}
                  <span
                    className={`absolute bottom-[-8px] left-0 w-0 h-1 transition-all duration-700 group-hover:w-full ${underlineColor}`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-gray-800 px-6 py-4 shadow-md">
          <ul className="space-y-4 font-medium text-lg">
            {navItems.map((item) => (
              <li key={item}>
                <a href={"#"+item} onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
