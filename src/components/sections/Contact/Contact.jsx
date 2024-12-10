// src/components/sections/Contact/Contact.jsx
import React from 'react';
import { ContactForm } from './ContactForm';

export const Contact = () => (
  <section id="contacto" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Contacto</h2>
      <div className="max-w-xl mx-auto">
        <ContactForm />
      </div>
    </div>
  </section>
);

