// src/components/layout/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { MobileNavLink } from './MobileNavLink';

export const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">Juan Desarrollador</span>
          </div>
          
          {/* Menú móvil toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Menú desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#inicio" active={activeSection === 'inicio'}>Inicio</NavLink>
            <NavLink href="#sobre-mi" active={activeSection === 'sobre-mi'}>Sobre mí</NavLink>
            <NavLink href="#proyectos" active={activeSection === 'proyectos'}>Proyectos</NavLink>
            <NavLink href="#habilidades" active={activeSection === 'habilidades'}>Habilidades</NavLink>
            <NavLink href="#contacto" active={activeSection === 'contacto'}>Contacto</NavLink>
          </div>
        </div>
      </div>

      {/* Menú móvil expandido */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="#inicio" active={activeSection === 'inicio'}>Inicio</MobileNavLink>
            <MobileNavLink href="#sobre-mi" active={activeSection === 'sobre-mi'}>Sobre mí</MobileNavLink>
            <MobileNavLink href="#proyectos" active={activeSection === 'proyectos'}>Proyectos</MobileNavLink>
            <MobileNavLink href="#habilidades" active={activeSection === 'habilidades'}>Habilidades</MobileNavLink>
            <MobileNavLink href="#contacto" active={activeSection === 'contacto'}>Contacto</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};