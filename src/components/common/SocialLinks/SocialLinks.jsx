// src/components/common/SocialLinks/SocialLink.jsx
export const SocialLink = ({ href, icon, label }) => (
    <a
      href={href}
      className="text-white hover:text-gray-200 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );