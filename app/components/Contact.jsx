export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                    <i className="fas fa-envelope text-blue-500 dark:text-blue-300"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </h4>
                    <a
                      href="mailto:gayashanweerasundara@gmail.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      gayashanweerasundara@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg mr-4">
                    <i className="fas fa-phone-alt text-green-500 dark:text-green-300"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">
                      Phone
                    </h4>
                    <a
                      href="tel:+94779082150"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      +94 779082150
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg mr-4">
                    <i className="fab fa-linkedin-in text-purple-500 dark:text-purple-300"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">
                      LinkedIn
                    </h4>
                    <a
                      href="https://www.linkedin.com/in/gayashan-weerasundara/"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                      target="_blank"
                    >
                      linkedin.com/in/gayashan-weerasundara
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg mr-4">
                    <i className="fas fa-map-marker-alt text-red-500 dark:text-red-300"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Yakkala, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/gayashan-weerasundara/"
                    className="w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full text-blue-500 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=Gayashan_Weerasundara"
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    target="_blank"
                  >
                    <i className="fas fa-graduation-cap"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-gray-800 dark:bg-gray-100 rounded-full text-white dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-200"
                    target="_blank"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
