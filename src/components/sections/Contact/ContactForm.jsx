// src/components/sections/Contact/ContactForm.jsx
import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  const initialState = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Limpiar estado de envío después de 3 segundos
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const validateField = (name, value) => {
    switch (name) {
      case 'nombre':
        return !value.trim() ? 'El nombre es requerido' : 
               value.length < 2 ? 'El nombre debe tener al menos 2 caracteres' : '';
      case 'email':
        return !value.trim() ? 'El email es requerido' :
               !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Email inválido' : '';
      case 'mensaje':
        return !value.trim() ? 'El mensaje es requerido' :
               value.length < 10 ? 'El mensaje debe tener al menos 10 caracteres' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Validación en tiempo real
    const error = validateField(name, value);
    setFormErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) errors[key] = error;
    });
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setFormErrors({});

      try {
        // Simular envío de formulario
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log('Formulario enviado:', formData);
        setFormData(initialState);
        setSubmitStatus('success');
      } catch (error) {
        console.error('Error al enviar:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="space-y-4">
        {/* Campo Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 
              ${formErrors.nombre 
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
            aria-describedby={formErrors.nombre ? "nombre-error" : undefined}
            disabled={isSubmitting}
            required
          />
          {formErrors.nombre && (
            <p className="mt-1 text-sm text-red-600" id="nombre-error" role="alert">
              {formErrors.nombre}
            </p>
          )}
        </div>

        {/* Campo Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 
              ${formErrors.email 
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
            aria-describedby={formErrors.email ? "email-error" : undefined}
            disabled={isSubmitting}
            required
          />
          {formErrors.email && (
            <p className="mt-1 text-sm text-red-600" id="email-error" role="alert">
              {formErrors.email}
            </p>
          )}
        </div>

        {/* Campo Mensaje */}
        <div>
          <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
            Mensaje <span className="text-red-500">*</span>
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            value={formData.mensaje}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 
              ${formErrors.mensaje 
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
            aria-describedby={formErrors.mensaje ? "mensaje-error" : undefined}
            disabled={isSubmitting}
            required
          />
          {formErrors.mensaje && (
            <p className="mt-1 text-sm text-red-600" id="mensaje-error" role="alert">
              {formErrors.mensaje}
            </p>
          )}
        </div>
      </div>

      {/* Mensaje de estado */}
      {submitStatus && (
        <div
          className={`p-4 rounded-md ${
            submitStatus === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}
          role="alert"
        >
          {submitStatus === 'success' 
            ? '¡Mensaje enviado correctamente!' 
            : 'Error al enviar el mensaje. Por favor, intenta nuevamente.'}
        </div>
      )}

      {/* Botón Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex justify-center items-center py-2 px-4 border border-transparent 
          rounded-md shadow-sm text-sm font-medium text-white 
          ${isSubmitting 
            ? 'bg-blue-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          }`}
      >
        <Send className="w-5 h-5 mr-2" />
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  );
};