"use client";
import { useState } from 'react';

const categories = ['All', 'Web', 'Mobile', 'AI/ML', 'Blockchain'];

const projectsData = [
  {
    id: 1,
    title: 'Jobpool System',
    description: 'Blockchain-powered recruitment platform ensuring end-to-end data security and transparency.',
    category: 'Blockchain',
    tags: ['Blockchain', 'React', 'Node.js'],
    role: 'Lead Developer',
    gradient: 'from-blue-400 to-blue-600',
    icon: 'fa-briefcase'
  },
  {
    id: 2,
    title: 'Elephant Tracking App',
    description: 'Wildlife conservation application using geo-sensors to monitor elephant movements.',
    category: 'Mobile',
    tags: ['Flutter', 'Firebase', 'Geo-sensors'],
    role: 'Architect',
    gradient: 'from-green-400 to-green-600',
    icon: 'fa-republican'
  },
  {
    id: 3,
    title: 'EDMS for Cambodia',
    description: 'Electronic Document Management System for the Ministry of Post and Telecommunications.',
    category: 'Web',
    tags: ['Django', 'PostgreSQL', 'Government'],
    role: 'Technical Lead',
    gradient: 'from-purple-400 to-purple-600',
    icon: 'fa-file-alt'
  },
  {
    id: 4,
    title: 'Smart Wagawa',
    description: 'Agriculture management system with machine learning integration for crop optimization.',
    category: 'AI/ML',
    tags: ['Python', 'Django', 'ML'],
    role: 'Developer',
    gradient: 'from-yellow-400 to-yellow-600',
    icon: 'fa-seedling'
  },
  {
    id: 5,
    title: 'IGRS Project',
    description: 'Improved user experience for Sri Lanka\'s Ministry of Foreign Affairs document processing.',
    category: 'Web',
    tags: ['Django', 'React', 'Government'],
    role: 'Contributor',
    gradient: 'from-red-400 to-red-600',
    icon: 'fa-passport'
  },
  {
    id: 6,
    title: 'Adaptive Traffic Signal',
    description: 'Smart traffic management system for Greener Transport 4.0 initiative.',
    category: 'AI/ML',
    tags: ['AI', 'IoT', 'Python'],
    role: 'Researcher',
    gradient: 'from-indigo-400 to-indigo-600',
    icon: 'fa-traffic-light'
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium transition-colors
                  ${category === categories[0] ? 'rounded-l-lg' : ''}
                  ${category === categories[categories.length - 1] ? 'rounded-r-lg' : ''}
                  ${selectedCategory === category 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
              <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                <i className={`fas ${project.icon} text-white text-6xl`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.role}
                  </span>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors duration-300 inline-flex items-center"
          >
            View All Projects
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}