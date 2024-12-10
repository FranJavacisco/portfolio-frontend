// src/components/common/SocialLinks/SocialLinks.jsx
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const SocialLinks = () => (
  <div className="flex justify-center space-x-6">
    <SocialLink href="https://github.com/usuario" icon={<Github />} label="GitHub" />
    <SocialLink href="https://linkedin.com/in/usuario" icon={<Linkedin />} label="LinkedIn" />
    <SocialLink href="mailto:contacto@ejemplo.com" icon={<Mail />} label="Email" />
  </div>
);
