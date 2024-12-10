//Contenido para los archivos index.js de los componentes

//Layout
cat > src / components / layout / Navbar / index.js << EOL
export { Navbar } from './Navbar';
export { NavLink } from './NavLink';
export { MobileNavLink } from './MobileNavLink';
EOL

cat > src / components / layout / Footer / index.js << EOL
export { Footer } from './Footer';
EOL

//Common
cat > src / components / common / SocialLinks / index.js << EOL
export { SocialLinks } from './SocialLinks';
export { SocialLink } from './SocialLink';
EOL

//Sections
cat > src / components / sections / Hero / index.js << EOL
export { Hero } from './Hero';
EOL

cat > src / components / sections / About / index.js << EOL
export { About } from './About';
EOL

cat > src / components / sections / Projects / index.js << EOL
export { Projects } from './Projects';
export { ProjectCard } from './ProjectCard';
EOL

cat > src / components / sections / Skills / index.js << EOL
export { Skills } from './Skills';
export { SkillCategory } from './SkillCategory';
EOL

cat > src / components / sections / Contact / index.js << EOL
export { Contact } from './Contact';
export { ContactForm } from './ContactForm';
EOL