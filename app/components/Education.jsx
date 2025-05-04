export default function Education() {
  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/*  MSc */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                <i className="fas fa-graduation-cap text-blue-500 dark:text-blue-300 text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">MSc in Computer Science</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  University of Moratuwa
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              2021–2024 | Thesis: Research on AI/ML applications in character
              art generation
            </p>
            <a
              href="https://scholar.google.com/citations?user=Gayashan_Weerasundara"
              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm flex items-center"
              target="_blank"
            >
              <i className="fas fa-link mr-2"></i> View Research
            </a>
          </div>

          {/*  BSc */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg mr-4">
                <i className="fas fa-university text-green-500 dark:text-green-300 text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  BSc in Electronics & Telecommunication Engineering
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  General Sir John Kotelawala Defence University
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              2016–2020 | Focus on embedded systems and telecommunications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
