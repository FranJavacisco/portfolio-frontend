// src/components/sections/Projects/ProjectCard.jsx
import React from 'react';
import { Github } from 'lucide-react';

export const ProjectCard = ({ titulo, descripcion, tecnologias, github, demo }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-4">{titulo}</h3>
      <p className="text-gray-600 mb-4">{descripcion}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tecnologias.map((tech, i) => (
          <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a href={github} className="text-gray-600 hover:text-gray-900">
          <Github size={20} />
        </a>
        <a href={demo} className="text-gray-600 hover:text-gray-900">
          Demo
        </a>
      </div>
    </div>
  </div>
);