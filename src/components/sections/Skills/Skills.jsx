// src/components/sections/Skills/Skills.jsx
import React from 'react';
import { SkillCategory } from './SkillCategory';
import { skillsData } from '../../../data/skills';

export const Skills = () => (
  <section id="habilidades" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Habilidades Técnicas</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((categoria, index) => (
          <SkillCategory key={index} {...categoria} />
        ))}
      </div>
    </div>
  </section>
);

