// src/components/sections/Projects/Projects.jsx
import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../../../data/projects';

export const Projects = () => (
  <section id="proyectos" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Proyectos Destacados</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((proyecto, index) => (
          <ProjectCard key={index} {...proyecto} />
        ))}
      </div>
    </div>
  </section>
);

