export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Technical Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/*  Full-Stack  */}
          <div className="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                <i className="fas fa-layer-group text-blue-500 dark:text-blue-300 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold">Full-Stack Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                MERN Stack
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                Spring Boot
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                Flask
              </span>
            </div>
          </div>

          {/*  Backend  */}
          <div className="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg mr-4">
                <i className="fas fa-server text-green-500 dark:text-green-300 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                Python/Django
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                REST APIs
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                Celery/RabbitMQ
              </span>
            </div>
          </div>

          {/*  DevOps  */}
          <div className="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg mr-4">
                <i className="fas fa-code-branch text-purple-500 dark:text-purple-300 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold">DevOps</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                Docker
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                Kubernetes
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                CI/CD
              </span>
            </div>
          </div>

          {/*  Cloud  */}
          <div className="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg mr-4">
                <i className="fas fa-cloud text-yellow-500 dark:text-yellow-300 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold">Cloud</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                AWS
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                Firebase
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                Cloud-Native
              </span>
            </div>
          </div>

          {/*  Mobile  */}
          <div className="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg mr-4">
                <i className="fas fa-mobile-alt text-red-500 dark:text-red-300 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold">Mobile</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                Flutter
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                WPF
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                Cross-Platform
              </span>
            </div>
          </div>

          {/*  Databases  */}
          <div className="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg mr-4">
                <i className="fas fa-database text-indigo-500 dark:text-indigo-300 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold">Databases</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                PostgreSQL
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                Firebase
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                MongoDB
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white dark:bg-gray-800 shadow-md rounded-full flex items-center">
              <i className="fas fa-users mr-2 text-blue-500"></i> Team Leadership
            </span>
            <span className="px-4 py-2 bg-white dark:bg-gray-800 shadow-md rounded-full flex items-center">
              <i className="fas fa-tachometer-alt mr-2 text-green-500"></i>{" "}
              Performance Optimization
            </span>
            <span className="px-4 py-2 bg-white dark:bg-gray-800 shadow-md rounded-full flex items-center">
              <i className="fas fa-project-diagram mr-2 text-purple-500"></i> System
              Architecture
            </span>
            <span className="px-4 py-2 bg-white dark:bg-gray-800 shadow-md rounded-full flex items-center">
              <i className="fas fa-running mr-2 text-yellow-500"></i> Agile
              Methodologies
            </span>
            <span className="px-4 py-2 bg-white dark:bg-gray-800 shadow-md rounded-full flex items-center">
              <i className="fas fa-lightbulb mr-2 text-red-500"></i> Problem Solving
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
