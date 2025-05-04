export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3">
            <p className="text-lg mb-6">
              A passionate Technical Lead with over 4 years of experience
              architecting and delivering scalable backend solutions. Skilled in
              Python, Django, Flutter, and cloud technologies, with a focus on
              innovation and system optimization.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-500">
                Key Highlights
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    Led frontend/backend development for government and
                    enterprise projects.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    Expertise in AI/ML, blockchain integration, and full-stack
                    development.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    Completed MSc in Computer Science (University of Moratuwa,
                    2024) with research in AI-driven art generation.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    Advocate for open-source contributions and sustainable tech
                    solutions.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-500">
                Personal Interests
              </h3>
              <p className="text-lg">
                "In my free time, I explore AI research, contribute to
                open-source projects, and stay updated on emerging tech trends."
              </p>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-500">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Yakkala, Sri Lanka
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">
                    Experience
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">4+ Years</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">
                    Education
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    MSc Computer Science
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">
                    Specializations
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Backend, AI/ML, Cloud
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
