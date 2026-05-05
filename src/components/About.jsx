import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Hello! I am a passionate and dedicated software developer with a strong focus on building scalable and dynamic web applications. My journey in tech is driven by a deep curiosity for how things work and a desire to solve complex problems through elegant code.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I specialize in the <span className="font-semibold text-blue-600">MERN stack (MongoDB, Express.js, React, and Node.js)</span>, enjoying the versatility it offers for both front-end aesthetics and back-end robustness. My career goal is to continue growing as a full-stack engineer, contributing to innovative projects, and eventually leading technical teams to deliver impactful software solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
