import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl font-bold text-gray-900 tracking-tight">Portfolio</div>
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Skills</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
