import { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: (target as HTMLElement).offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-sm z-50 border-b ${scrolled ? "border-primary/30" : "border-muted"}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Logo />
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-primary focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-primary hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <motion.nav 
          {...fadeIn}
          className="lg:hidden bg-muted border-b border-muted"
        >
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-primary hover:text-white transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
