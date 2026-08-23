import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900 bg-opacity-95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-r from-dark-900 to-blue-900'
      }`}
    >
      <div className="container-custom py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            <span className="text-primary-500">Sushil</span> Yadav
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                className="text-white hover:text-primary-500 transition-colors cursor-pointer font-semibold"
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-dark-900 bg-opacity-95 backdrop-blur-md">
          <ul className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-white hover:text-primary-500 transition-colors cursor-pointer block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
