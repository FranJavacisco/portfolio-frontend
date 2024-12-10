// src/components/sections/Contact/ContactForm.jsx
import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.nombre.trim()) errors.nombre = 'El nombre es requerido';
    if (!formData.email.trim()) {
      errors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email inválido';
    }
    if (!formData.mensaje.trim()) errors.mensaje = 'El mensaje es requerido';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log('Formulario enviado:', formData);
      setFormData({ nombre: '', email: '', mensaje: '' });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={(e) => setFormData({...formData, nombre: e.target.value})}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          aria-describedby="nombre-error"
        />
        {formErrors.nombre && (
          <p className="mt-1 text-sm text-red-600" id="nombre-error">
            {formErrors.nombre}
          </p>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          aria-describedby="email-error"
        />
        {formErrors.email && (
          <p className="mt-1 text-sm text-red-600" id="email-error">
            {formErrors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          value={formData.mensaje}
          onChange={(e) => setFormData