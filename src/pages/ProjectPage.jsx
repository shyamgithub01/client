import React from 'react';

const ProjectsPage = () => {
  const projects = [
    { id: 1, title: "Rbac-App", description: "Robust backend system for role-based access control", technologies: ["Python", "FastAPI", "Postgresql"], github: "https://github.com/shyamgithub01/rabc-app", live: null },
    { id: 2, title: "OkHttp Project", description: "Java networking project using OkHttp library", technologies: ["Java", "OkHttp", "REST APIs"], github: "https://github.com/shyamgithub01/OkHttp-Project", live: null },
    { id: 3, title: "MyBank Frontend", description: "Modern banking interface with real-time transactions", technologies: ["React", "Tailwind CSS", "Redux"], github: "https://github.com/shyamgithub01/bankx-frontend", live: "https://bankx-48jf.onrender.com" },
    { id: 4, title: "MyBank Backend", description: "Secure banking system backend with transaction processing", technologies: ["Python", "Fastapi", "PostgreSQL"], github: "https://github.com/shyamgithub01/bank-backend", live: null },
    { id: 5, title: "Internship Projects", description: "Collection of projects during IoTiva Innovation LLP internship", technologies: ["Python", "Reactjs", "FastAPI"], github: "https://github.com/shyamgithub01/Internship", live: null },
    { id: 6, title: "FastAPI Standards", description: "Industry-standard backend implementation with FastAPI", technologies: ["Python", "FastAPI", "Render.com"], github: "https://github.com/shyamgithub01/FastAPI-Project-Industry-Standards", live: "https://fastapi-project-industry-standards-9.onrender.com/docs" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Main content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            My <span className="text-blue-600">Projects</span>
          </h1>
          
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-4 md:mb-6">
            Explore my technical projects showcasing expertise in Python, JavaScript, and modern web development
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            <a 
              href="https://www.linkedin.com/in/shyam-sirodariya/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-1.5 md:px-5 md:py-2 text-sm md:text-base bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/shyamgithub01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-1.5 md:px-5 md:py-2 text-sm md:text-base bg-gray-200 border border-gray-300 rounded-full font-medium hover:bg-gray-300 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
        
        {/* Experience badge */}
        <div className="bg-gray-100 border border-gray-200 rounded-2xl p-4 md:p-5 max-w-xs mx-auto md:absolute md:top-8 md:right-8 mb-6 md:mb-0">
          <div className="flex items-center mb-2 md:mb-3">
            <div className="bg-orange-500 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-sm md:text-base">Experience</h3>
          </div>
          <p className="text-blue-600 font-medium text-sm md:text-base">IoTiva Innovation LLP</p>
          <p className="text-xs md:text-sm mt-1">Internship - Full Stack</p>
          
          <div className="mt-3 md:mt-4">
            <div className="flex items-center mb-2 md:mb-3">
              <div className="bg-emerald-500 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="font-bold text-sm md:text-base">Education</h3>
            </div>
            <p className="text-emerald-600 font-medium text-sm md:text-base">Gandhinagar University</p>
            <p className="text-xs md:text-sm mt-1">Computer Science</p>
          </div>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 mt-8 md:mt-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-4 md:p-5 h-full flex flex-col">
                <div className="flex justify-between items-start mb-2 md:mb-3">
                  <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                  <div className="bg-gray-100 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                    {project.technologies[0]}
                  </div>
                </div>
                
                <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 md:py-2 bg-blue-600 text-white rounded-lg text-center text-xs md:text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    GitHub
                  </a>
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1.5 md:py-2 bg-gray-100 rounded-lg text-center text-xs md:text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured projects section */}
        <div className="mt-10 md:mt-16 mb-12 md:mb-16">
          <div className="relative bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center text-blue-600">
              Featured Projects
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-5 md:gap-6">
              <div className="lg:w-2/3">
                <div className="space-y-4 md:space-y-5">
                  <div className="bg-gray-50 p-4 md:p-5 rounded-xl border border-blue-200">
                    <h3 className="text-base md:text-lg font-semibold text-blue-600 mb-2">FastAPI Industry Standards</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Production-ready backend with authentication, documentation, testing, and CI/CD pipelines.
                    </p>
                    <a 
                      href="https://fastapi-project-industry-standards-9.onrender.com/docs" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm md:text-base font-medium hover:bg-blue-700 transition-colors"
                    >
                      Explore Demo
                    </a>
                  </div>
                  
                  <div className="bg-gray-50 p-4 md:p-5 rounded-xl border border-emerald-200">
                    <h3 className="text-base md:text-lg font-semibold text-emerald-600 mb-2">BankX Full Stack Application</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Modern banking solution with React frontend and Fastapi backend.
                    </p>
                    <a 
                      href="https://bankx-48jf.onrender.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm md:text-base font-medium hover:bg-emerald-700 transition-colors"
                    >
                      Visit App
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/3">
                <div className="relative bg-gray-50 border border-blue-200 rounded-xl md:rounded-2xl p-4 md:p-5">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="bg-blue-600 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                      <span className="font-bold text-sm md:text-base text-white">SS</span>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-sm">Shyam Sirodariya</h3>
                      <p className="text-blue-600 text-xs md:text-sm">Full Stack Developer</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 md:space-y-3 mb-4">
                    <div className="flex items-center text-xs md:text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>Python Development</span>
                    </div>
                    <div className="flex items-center text-xs md:text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>React Applications</span>
                    </div>
                    <div className="flex items-center text-xs md:text-sm">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                      <span>API Design</span>
                    </div>
                  </div>
                  
                  <div>
                    <a 
                      href="https://github.com/shyamgithub01" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs md:text-sm text-blue-600 hover:text-blue-500 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      github.com/shyamgithub01
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating action button */}
      <div className="fixed bottom-4 left-4">
        <a 
          href="/" 
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;