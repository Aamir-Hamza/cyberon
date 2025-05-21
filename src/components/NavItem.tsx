import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface NavItemProps {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
  active?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ label, href, dropdown, active }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  if (!dropdown) {
    return (
      <a 
        href={href} 
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          active 
            ? 'text-dark-900 dark:text-white' 
            : 'text-dark-700 dark:text-white/80 hover:text-dark-900 dark:hover:text-white hover:bg-dark-100 dark:hover:bg-dark-700'
        }`}
      >
        {label}
      </a>
    );
  }
  
  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button 
        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          active || isOpen
            ? 'text-dark-900 dark:text-white' 
            : 'text-dark-700 dark:text-white/80 hover:text-dark-900 dark:hover:text-white hover:bg-dark-100 dark:hover:bg-dark-700'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown size={16} className="ml-1" />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white dark:bg-dark-800 ring-1 ring-black ring-opacity-5 z-50 animate-fade-in">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {dropdown.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-sm text-dark-700 dark:text-white/80 hover:bg-dark-100 dark:hover:bg-dark-700 hover:text-dark-900 dark:hover:text-white transition-colors"
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};