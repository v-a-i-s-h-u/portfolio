import { motion } from "framer-motion";
import Profilepic from "../assets/profile.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hi, I&apos;m<br /> <span className="text-indigo-400">Vaishnavi S</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-300 mb-8">
              MERN Stack Developer
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-lg">
              I’m passionate about building responsive web and mobile apps using modern technologies like React.js, Node.js, MongoDB, and Python. Let's create amazing user experiences together!
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-indigo-600 text-indigo-400 font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                View My Work
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-xl"></div>
              <img
                src={Profilepic}
                alt="Vaishnavi S"
                className="relative rounded-3xl w-80 h-80 object-cover shadow-2xl border-2 border-gray-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
