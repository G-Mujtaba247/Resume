import React from 'react';

const Header = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 flex items-center justify-center min-h-[90vh] bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8">
          <img
            src="profile.jpeg"
            alt="Profile"
            className="rounded-full object-cover w-full h-full shadow-xl border-4 border-white"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
          Ghulam Mujtaba
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-blue-600 mb-8">
          MERN Stack Developer
        </h2>
        <p className="max-w-2xl text-lg text-gray-600 mb-10 leading-relaxed">
          Building clean, responsive, and robust web applications. Passionate about creating seamless user experiences from front to back.
        </p>
        <div className="flex space-x-4">
          <a href="#about" className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            More About Me
          </a>
          <a href="#skills" className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium border border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-colors shadow-sm">
            View Skills
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
