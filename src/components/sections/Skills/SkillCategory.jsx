// src/components/sections/Skills/SkillCategory.jsx
export const SkillCategory = ({ categoria, skills }) => (
  <div className="bg-gray-50 rounded-lg p-6">
    <h3 className="text-xl font-semibold mb-4">{categoria}</h3>
    <ul className="space-y-2">
      {skills.map((skill, i) => (
        <li key={i} className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);