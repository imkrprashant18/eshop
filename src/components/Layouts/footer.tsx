const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About Us */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              About Us
            </h2>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              ShopNow is your one-stop destination for quality products and
              excellent deals. We strive to provide the best online shopping
              experience.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="/shop"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Newsletter
            </h2>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Sign up to get the latest updates and exclusive deals!
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.04c-5.507 0-10 4.493-10 10.006 0 4.991 3.657 9.128 8.437 9.878v-6.993h-2.54v-2.734h2.54v-2.084c0-2.508 1.492-3.894 3.776-3.894 1.094 0 2.238.196 2.238.196v2.459h-1.261c-1.243 0-1.629.771-1.629 1.56v1.764h2.773l-.443 2.734h-2.33v6.993c4.78-.75 8.437-4.887 8.437-9.878 0-5.513-4.493-10.006-10-10.006z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.001.974-3.127 1.194-.896-.953-2.173-1.548-3.591-1.548-2.719 0-4.924 2.205-4.924 4.924 0 .386.044.762.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.425.729-.666 1.574-.666 2.476 0 1.708.87 3.214 2.188 4.097-.807-.026-1.567-.247-2.23-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.412.111-.846.171-1.294.171-.316 0-.623-.031-.924-.088.624 1.95 2.436 3.372 4.584 3.412-1.68 1.318-3.808 2.104-6.115 2.104-.397 0-.79-.023-1.175-.068 2.179 1.396 4.768 2.21 7.548 2.21 9.057 0 14.01-7.505 14.01-14.01 0-.213-.005-.426-.015-.637.964-.693 1.8-1.56 2.462-2.548l-.047-.02z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zm0 18.839c-4.894 0-8.839-3.945-8.839-8.839s3.945-8.839 8.839-8.839 8.839 3.945 8.839 8.839-3.945 8.839-8.839 8.839zm-.001-13.163c-.61 0-1.104.494-1.104 1.104 0 .61.494 1.104 1.104 1.104.61 0 1.104-.494 1.104-1.104 0-.61-.494-1.104-1.104-1.104zm1.663 7.445c-.39.195-1.341.39-1.663.39s-1.274-.195-1.663-.39c-.555-.276-.888-.833-.888-1.498v-4.121c0-.664.333-1.221.888-1.498.39-.195 1.341-.39 1.663-.39s1.274.195 1.663.39c.555.277.888.834.888 1.498v4.121c0 .665-.333 1.221-.888 1.498z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-4 md:mt-0 text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} ShopNow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
