import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Prem Kumar J. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/PREM-KUMAR-J"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/premkumarj00/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <FaLinkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://www.behance.net/premkumarj00"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <FaBehance className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
