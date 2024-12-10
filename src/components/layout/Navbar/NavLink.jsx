// src/components/layout/Navbar/NavLink.jsx
export const NavLink = ({ href, active, children }) => (
    <a
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        active
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
      }`}
    >
      {children}
    </a>
  );