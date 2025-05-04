export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="#"
              className="text-xl font-bold text-white flex items-center"
            >
              <span className="bg-blue-500 text-white p-2 rounded mr-2">
                GW
              </span>
              Gayashan Weerasundara
            </a>
            <p className="mt-2 text-sm">
              Technical Lead | Software Engineer | Innovator
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a
                href="https://www.linkedin.com/in/gayashan-weerasundara/"
                className="text-gray-300 hover:text-white"
                target="_blank"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="https://scholar.google.com/citations?user=Gayashan_Weerasundara"
                className="text-gray-300 hover:text-white"
                target="_blank"
              >
                <i className="fas fa-graduation-cap text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                target="_blank"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
            <p className="text-sm">
              © 2025 Gayashan Weerasundara. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
