// src/components/layout/Navbar/MobileNavLink.jsx
export const MobileNavLink = ({ href, active, children }) => (
    <a
      href={href}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        active
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
      }`}
    >
      {children}
    </a>
  );