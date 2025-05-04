export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium rounded-l-lg bg-blue-500 text-white"
            >
              All
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              Web
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              Mobile
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              AI/ML
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium rounded-r-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              Blockchain
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/*  Project 1 */}
          <div className="project-card bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
              <i className="fas fa-briefcase text-white text-6xl"></i>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Jobpool System</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Blockchain-powered recruitment platform ensuring end-to-end data
                security and transparency.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                  Blockchain
                </span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                  React
                </span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">
                  Node.js
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Lead Developer
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

          {/*  Project 2 */}
          <div className="project-card bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
            <div className="h-48 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
              <i className="fas fa-republican text-white text-6xl"></i>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Elephant Tracking App</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Wildlife conservation application using geo-sensors to monitor
                elephant movements.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs rounded-full">
                  Flutter
                </span>
                <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full">
                  Firebase
                </span>
                <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded-full">
                  Geo-sensors
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Architect
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

          {/*  Project 3 */}
          <div className="project-card bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
            <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
              <i className="fas fa-file-alt text-white text-6xl"></i>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">EDMS for Cambodia</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Electronic Document Management System for the Ministry of Post
                and Telecommunications.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                  Django
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-xs rounded-full">
                  PostgreSQL
                </span>
                <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs rounded-full">
                  Government
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Technical Lead
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

          {/*  Project 4 */}
          <div className="project-card bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
            <div className="h-48 bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
              <i className="fas fa-seedling text-white text-6xl"></i>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Smart Wagawa</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Agriculture management system with machine learning integration
                for crop optimization.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                  Python
                </span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                  Django
                </span>
                <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs rounded-full">
                  ML
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Developer
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

          {/*  Project 5 */}
          <div className="project-card bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
            <div className="h-48 bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center">
              <i className="fas fa-passport text-white text-6xl"></i>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">IGRS Project</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Improved user experience for Sri Lanka's Ministry of Foreign
                Affairs document processing.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                  Django
                </span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">
                  React
                </span>
                <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs rounded-full">
                  Government
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Contributor
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

          {/*  Project 6 */}
          <div className="project-card bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
            <div className="h-48 bg-gradient-to-r from-indigo-400 to-indigo-600 flex items-center justify-center">
              <i className="fas fa-traffic-light text-white text-6xl"></i>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Adaptive Traffic Signal
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Smart traffic management system for Greener Transport 4.0
                initiative.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                  AI
                </span>
                <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full">
                  IoT
                </span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                  Python
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Researcher
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
