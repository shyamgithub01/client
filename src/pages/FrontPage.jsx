// frontpage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FrontPage = () => {
  const projects = [
    { 
      id: 1, 
      name: 'RBAC-Backend', 
      language: 'Python', 
      updated: '12 hours ago',
      github: 'https://github.com/shyamgithub01/rabc-app',
      live: null,
      technologies: ['PostgreSQL', 'FastAPI', 'MongoDB']
    },
    { 
      id: 2, 
      name: 'bankx-frontend', 
      language: 'JavaScript', 
      updated: '3 days ago',
      github: 'https://github.com/shyamgithub01/bankx-frontend',
      live: 'https://bankx-48jf.onrender.com',
      technologies: ['React', 'Tailwind CSS', 'HTMl']
    },
    { 
      id: 3, 
      name: 'bank-backend', 
      language: 'Python', 
      updated: '3 days ago',
      github: 'https://github.com/shyamgithub01/bank-backend',
      live: null,
      technologies: ['Python', 'Django', 'PostgreSQL']
    },
    { 
      id: 4, 
      name: 'FastAPI Standards', 
      language: 'Python', 
      updated: '4 days ago',
      github: 'https://github.com/shyamgithub01/FastAPI-Project-Industry-Standards',
      live: 'https://fastapi-project-industry-standards-9.onrender.com/docs',
      technologies: ['FastAPI', 'Python', 'OpenAPI']
    },
    { 
      id: 5, 
      name: 'Internship Projects', 
      language: 'Python', 
      updated: '4 days ago',
      github: 'https://github.com/shyamgithub01/Internship',
      live: null,
      technologies: ['Python', 'IoT', 'Automation']
    },
    { 
      id: 6, 
      name: 'OkHttp Project', 
      language: 'Java', 
      updated: 'Jun 25',
      github: 'https://github.com/shyamgithub01/OkHttp-Project',
      live: null,
      technologies: ['Java', 'OkHttp', 'REST']
    },
  ];

  const skills = [
    { name: 'Python', icon: 'P' },
    { name: 'PostgreSQL', icon: 'P' },
    { name: 'React', icon: 'R' },
    { name: 'FastAPI', icon: 'F' },
    { name: 'API Testing', icon: 'A' },
    { name: 'Java', icon: 'J' },
    { name: 'MongoDB', icon: 'M' },
    { name: 'Tailwind CSS', icon: 'T' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] py-10">
          <div className="lg:w-1/2 mb-12 lg:mb-0 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block">Hello, I'm</span>
              <span className="block text-blue-600">
                Shyam Sirodariya
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg">
              Full Stack Developer specializing in Python and Reactjs. 
              Passionate about building efficient, scalable solutions with clean code.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/projects" 
                className="px-6 py-3 sm:px-8 sm:py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                View Projects
              </Link>
              <a 
                href="https://www.linkedin.com/in/shyam-sirodariya/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 sm:px-8 sm:py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base"
              >
                Contact Me
              </a>
            </div>

            {/* Experience & Education */}
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-4 sm:gap-6">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Experience</p>
                  <p className="font-medium text-sm sm:text-base">IoTiva Innovation LLP</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Education</p>
                  <p className="font-medium text-sm sm:text-base">Gandhinagar University</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center px-4">
            <div className="relative w-full max-w-md">
              <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 w-full">
                <div className="flex items-center mb-6 sm:mb-8">
                  <div className="bg-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center">
                    <span className="text-lg sm:text-xl font-bold text-white">SS</span>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h2 className="text-lg sm:text-xl font-bold">Shyam Sirodariya</h2>
                    <p className="text-blue-600 text-sm sm:text-base">Python & React Developer</p>
                  </div>
                </div>
                
                <div className="space-y-3  sm:space-y-4">
                  {projects.slice(0, 3).map((project) => (
                    <div 
                      key={project.id}
                      className="flex items-center justify-between p-3 sm:p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-500 transition-colors cursor-pointer"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <div >
                        <h3 className="font-semibold  text-sm sm:text-base">{project.name}</h3>
                        <p className="text-xs sm:text-sm text-gray-500">{project.language}</p>
                      </div>
                      
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 sm:mt-8 flex justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-400"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-yellow-400"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-400"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-400"></div>
                  </div>
                  
                  <div className="flex gap-2">
                    <a 
                      href="https://github.com/shyamgithub01" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                      aria-label="GitHub profile"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/shyam-sirodariya/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                      aria-label="LinkedIn profile"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-20 mb-16 sm:mb-20 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            My <span className="text-blue-600">Technical</span> Expertise
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 text-center hover:border-blue-500 transition-colors"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-sm sm:text-lg font-bold text-white">{skill.icon}</span>
                </div>
                <h3 className="font-semibold text-xs sm:text-sm">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="mt-16 sm:mt-20 mb-20 sm:mb-32 px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
              <span className="text-blue-600">Featured</span> Projects
            </h2>
            <Link 
              to="/projects" 
              className="flex items-center text-blue-600 hover:text-blue-500 transition-colors text-sm sm:text-base"
            >
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-0">{project.name}</h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded self-start sm:self-auto">
                      {project.language}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.technologies?.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-100 px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-4 sm:flex-1 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
                    >
                      GitHub
                    </a>
                    {project.live && (
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-4 sm:flex-1 bg-gray-100 rounded-lg text-center font-medium hover:bg-gray-200 transition-colors text-sm sm:text-base"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
        <a 
          href="mailto:shyam.sirodariya@gmail.com" 
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
          aria-label="Send email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FrontPage;