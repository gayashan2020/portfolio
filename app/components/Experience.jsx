export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Professional Experience
        </h2>

        <div className="relative pl-12 timeline">
          {/*  Current Role */}
          <div className="relative mb-12 timeline-item">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold">Technical Lead</h3>
                <span className="text-blue-500 font-medium">
                  Aug 2024–Present
                </span>
              </div>
              <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Enterprise Business Intelligence (Pvt) Ltd
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  Leading architecture and development of enterprise systems
                </li>
                <li>
                  Mentoring junior developers and implementing CI/CD pipelines
                </li>
                <li>Optimizing system performance and scalability</li>
              </ul>
            </div>
          </div>

          {/*  Previous Role 1 */}
          <div className="relative mb-12 timeline-item">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold">Software Engineer</h3>
                <span className="text-blue-500 font-medium">
                  Feb 2021–Mar 2022
                </span>
              </div>
              <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Enterprise Business Intelligence (Pvt) Ltd
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  Developed the Jobpool system with blockchain integration for
                  secure recruitment processes
                </li>
                <li>
                  Built an elephant tracking app using geo-sensors to aid
                  wildlife conservation
                </li>
                <li>
                  Contributed to IGRS Project improving user experience for Sri
                  Lanka's Ministry of Foreign Affairs
                </li>
              </ul>
            </div>
          </div>

          {/*  Previous Role 2 */}
          <div className="relative mb-12 timeline-item">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold">
                  Associate Software Engineer
                </h3>
                <span className="text-blue-500 font-medium">
                  Jan 2020–Jan 2021
                </span>
              </div>
              <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Enterprise Business Intelligence (Pvt) Ltd
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  Contributed to internal systems like HRIS and asset management
                  tools
                </li>
                <li>
                  Developed Smart Wagawa agriculture management system with
                  Python/Django and ML integration
                </li>
                <li>
                  Participated in EDMS development for Cambodia's Ministry of
                  Post and Telecommunications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
