// src/components/layout/Footer/Footer.jsx
import React from 'react';
import { SocialLinks } from '../../common/SocialLinks';

export const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; 2024 Juan Desarrollador. Todos los derechos reservados.</p>
        </div>
        <SocialLinks />
      </div>
    </div>
  </footer>
);