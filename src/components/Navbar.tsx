import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import { personalInfo } from '@/data/portfolio';

interface NavbarProps {
  scrollDirection: 'up' | 'down';
}

const Navbar: React.FC<NavbarProps> = ({ scrollDirection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' }
  ];

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || scrollDirection === 'down'
          ? 'frost-glass shadow-2xl border-b border-gold-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="text-2xl font-bold gradient-text"
          >
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer flex items-center space-x-2"
            >
              <span className="text-3xl">✨</span>
              <span>{personalInfo.name.split(' ')[0]}</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                className="text-silver-300 hover:text-gold-400 transition-all duration-300 cursor-pointer font-medium relative group"
                activeClass="text-gold-400"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Resume Download */}
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="frost-button flex items-center space-x-2 text-sm"
            >
              <FaDownload className="w-4 h-4" />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden gold-card w-12 h-12 flex items-center justify-center rounded-xl"
          >
            {isOpen ? <FaTimes className="w-5 h-5 text-gold-400" /> : <FaBars className="w-5 h-5 text-gold-400" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="md:hidden frost-glass border-t border-gold-500/20 mt-2"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="block text-silver-300 hover:text-gold-400 transition-all duration-300 cursor-pointer font-medium py-3 px-4 rounded-lg hover:bg-gold-500/10"
                    activeClass="text-gold-400 bg-gold-500/10"
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Resume Download */}
                <motion.a
                  href={personalInfo.resumeUrl}
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                  className="frost-button flex items-center justify-center space-x-2 mt-6"
                >
                  <FaDownload className="w-4 h-4" />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
