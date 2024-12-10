// src/components/sections/Hero/Hero.jsx
import React from 'react';
import { SocialLinks } from '../../common/SocialLinks';

export const Hero = () => (
  <section id="inicio" className="pt-20 pb-12 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-500 to-purple-600">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Desarrollador Frontend
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Creando experiencias web excepcionales
        </p>
        <SocialLinks />
      </div>
    </div>
  </section>
);