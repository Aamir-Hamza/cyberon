import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ChevronDown, Twitter, Instagram, Youtube, Linkedin, Sun, Moon } from 'lucide-react';
import { NavItem } from './NavItem';
import { useTheme } from '../context/ThemeContext';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-md shadow-soft' : 'bg-transparent'}`}>
      <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white animate-gradient-shine">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="mailto:info@cyberon.in" className="flex items-center hover:text-white/80 transition-all duration-300 hover:scale-105">
              <span>Email: info@cyberon.in</span>
            </a>
            <a href="tel:084484570076" className="flex items-center hover:text-white/80 transition-all duration-300 hover:scale-105">
              <span>Phone: 084484 57007</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="hover:text-white/80 transition-all duration-300 hover:scale-110" aria-label="Twitter">
              <Twitter size={16} className="animate-float" style={{ animationDelay: '0.1s' }} />
            </a>
            <a href="#" className="hover:text-white/80 transition-all duration-300 hover:scale-110" aria-label="Instagram">
              <Instagram size={16} className="animate-float" style={{ animationDelay: '0.2s' }} />
            </a>
            <a href="#" className="hover:text-white/80 transition-all duration-300 hover:scale-110" aria-label="YouTube">
              <Youtube size={16} className="animate-float" style={{ animationDelay: '0.3s' }} />
            </a>
            <a href="#" className="hover:text-white/80 transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
              <Linkedin size={16} className="animate-float" style={{ animationDelay: '0.4s' }} />
            </a>
            <button
              onClick={toggleTheme}
              className="bg-white/10 text-white p-1 rounded-md hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-glow"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? <Moon size={16} className="animate-spin-slow" /> : <Sun size={16} className="animate-spin-slow" />}
            </button>
            <a href="#" className="bg-white text-secondary-600 px-3 py-1 rounded-md text-xs font-medium hover:bg-white/90 transition-all duration-300 shadow-soft hover:shadow-glow hover:scale-105">
              Follow us
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="flex items-center space-x-2 group hover:scale-105 transition-transform duration-300">
            <Shield className="text-secondary-500 animate-bounce-slow" size={28} />
            <span className="text-xl font-bold text-dark-900 dark:text-white group-hover:text-secondary-500 transition-colors duration-300">Cyber<span className="text-secondary-500 animate-glow">ON</span></span>
          </a>
          
          <nav className="hidden lg:flex space-x-1">
            <NavItem label="Home" href="#" active={true} />
            <NavItem 
              label="IT" 
              href="#" 
              dropdown={[
                { label: 'IT Security', href: '#' },
                { label: 'Network Security', href: '#' },
                { label: 'Cloud Security', href: '#' },
              ]} 
            />
            <NavItem 
              label="Solutions" 
              href="#" 
              dropdown={[
                { label: 'Enterprise Security', href: '#' },
                { label: 'SIEM Solutions', href: '#' },
                { label: 'Security Awareness', href: '#' },
              ]} 
            />
            <NavItem 
              label="Services" 
              href="#" 
              dropdown={[
                { label: 'Penetration Testing', href: '#' },
                { label: 'Risk Assessment', href: '#' },
                { label: 'Incident Response', href: '#' },
                { label: 'Security Audits', href: '#' },
              ]} 
            />
            <NavItem 
              label="Consulting" 
              href="#" 
              dropdown={[
                { label: 'Security Consulting', href: '#' },
                { label: 'Compliance', href: '#' },
                { label: 'Policy Development', href: '#' },
              ]} 
            />
            <NavItem 
              label="Courses" 
              href="#" 
              dropdown={[
                { label: 'Ethical Hacking', href: '#' },
                { label: 'Network Security', href: '#' },
                { label: 'Cyber Forensics', href: '#' },
                { label: 'Security Management', href: '#' },
                { label: 'All Courses', href: '#' },
              ]} 
            />
            <NavItem label="About Us" href="#" />
            <NavItem label="Contact Us" href="#" />
          </nav>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="lg:hidden bg-white/10 dark:bg-dark-800 text-dark-900 dark:text-white p-2 rounded-md hover:bg-white/20 dark:hover:bg-dark-700 transition-all duration-300 hover:scale-110 hover:shadow-glow"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? <Moon size={20} className="animate-spin-slow" /> : <Sun size={20} className="animate-spin-slow" />}
            </button>
            <button 
              className="lg:hidden text-dark-900 dark:text-white hover:text-secondary-500 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={24} className="animate-rotate-180" /> : <Menu size={24} className="animate-rotate-180" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? 'block animate-slide-down' : 'hidden'}`}>
        <nav className="bg-white/95 dark:bg-dark-900/95 backdrop-blur-md px-4 pt-2 pb-6 shadow-soft-lg">
          <a href="#" className="block py-2 text-dark-900 dark:text-white hover:text-secondary-500 border-b border-dark-200 dark:border-dark-600 transition-colors duration-300">Home</a>
          <MobileDropdown 
            label="IT" 
            items={[
              { label: 'IT Security', href: '#' },
              { label: 'Network Security', href: '#' },
              { label: 'Cloud Security', href: '#' },
            ]} 
          />
          <MobileDropdown 
            label="Solutions" 
            items={[
              { label: 'Enterprise Security', href: '#' },
              { label: 'SIEM Solutions', href: '#' },
              { label: 'Security Awareness', href: '#' },
            ]} 
          />
          <MobileDropdown 
            label="Services" 
            items={[
              { label: 'Penetration Testing', href: '#' },
              { label: 'Risk Assessment', href: '#' },
              { label: 'Incident Response', href: '#' },
              { label: 'Security Audits', href: '#' },
            ]} 
          />
          <MobileDropdown 
            label="Consulting" 
            items={[
              { label: 'Security Consulting', href: '#' },
              { label: 'Compliance', href: '#' },
              { label: 'Policy Development', href: '#' },
            ]} 
          />
          <MobileDropdown 
            label="Courses" 
            items={[
              { label: 'Ethical Hacking', href: '#' },
              { label: 'Network Security', href: '#' },
              { label: 'Cyber Forensics', href: '#' },
              { label: 'Security Management', href: '#' },
              { label: 'All Courses', href: '#' },
            ]} 
          />
          <a href="#" className="block py-2 text-dark-900 dark:text-white hover:text-secondary-500 border-b border-dark-200 dark:border-dark-600 transition-colors duration-300">About Us</a>
          <a href="#" className="block py-2 text-dark-900 dark:text-white hover:text-secondary-500 transition-colors duration-300">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

const MobileDropdown = ({ label, items }: { label: string, items: { label: string, href: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-dark-200 dark:border-dark-600">
      <button 
        className="flex items-center justify-between w-full py-2 text-dark-900 dark:text-white hover:text-secondary-500 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <div className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 py-2' : 'max-h-0'}`}>
        {items.map((item, index) => (
          <a 
            key={item.label} 
            href={item.href} 
            className="block py-1 text-dark-700 dark:text-white/80 hover:text-secondary-500 text-sm transition-colors duration-300 animate-slide-right"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};