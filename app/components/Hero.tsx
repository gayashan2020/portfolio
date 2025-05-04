export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 tech-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Gayashan Weerasundara
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-500 mb-4">
              Technical Lead | Software Engineer | Innovator
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              "Building scalable solutions at the intersection of technology and
              creativity."
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Explore My Work
              </a>
              <a
                href="#"
                className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors duration-300"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl animate-float">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQF0c1TNFFvHTQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683247702690?e=1751500800&v=beta&t=YkYvH7_8yMwE3QoCRAbNouomVwOlL72MhoqwWv2dz-E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
