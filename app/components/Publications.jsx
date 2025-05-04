export default function Publications() {
  return (
    <section id="publications" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Academic Publications
        </h2>

        <div className="space-y-8">
          {/*  Publication 1 */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">
              "A Multi-Stage Approach to Image Consistency in Zero-Shot
              Character Art Generation for the D&D Domain"
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              ICAART 2024 | Explores AI-driven art generation for gaming domains
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <i className="fas fa-link mr-2"></i>
              <a
                href="https://scholar.google.com/citations?user=Gayashan_Weerasundara"
                className="hover:text-blue-500 dark:hover:text-blue-400"
                target="_blank"
              >
                View on Google Scholar
              </a>
            </div>
          </div>

          {/*  Publication 2 */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">
              "Comparative Analysis of Named Entity Recognition in the Dungeons
              and Dragons Domain"
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              RANLP 2022 | Research on NLP techniques for gaming narratives
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <i className="fas fa-link mr-2"></i>
              <a
                href="https://doi.org/10.48550/ARXIV.2309.17171"
                className="hover:text-blue-500 dark:hover:text-blue-400"
                target="_blank"
              >
                DOI: 10.48550/ARXIV.2309.17171
              </a>
            </div>
          </div>

          {/*  Publication 3 */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">
              "Adaptive Traffic Signal Scheme for Greener Transport 4.0"
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Book Chapter, 2022 | Smart traffic management solutions
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <i className="fas fa-link mr-2"></i>
              <a
                href="https://doi.org/10.1007/978-981-19-1677-9_18"
                className="hover:text-blue-500 dark:hover:text-blue-400"
                target="_blank"
              >
                DOI: 10.1007/978-981-19-1677-9_18
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://scholar.google.com/citations?user=Gayashan_Weerasundara"
            className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors duration-300 inline-flex items-center"
            target="_blank"
          >
            View All Publications
            <i className="fas fa-external-link-alt ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
