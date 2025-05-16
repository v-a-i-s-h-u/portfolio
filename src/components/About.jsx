// About.jsx
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Get to know more about who I am and what I do
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/3 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="relative rounded-2xl w-64 h-64 object-cover shadow-xl border-2 border-gray-800"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-2/3 text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              I&apos;m Vaishnavi S, a MERN Stack Developer
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I am a passionate full-stack web developer with experience in building responsive web and mobile applications using the MERN stack. I’m currently interning at Whytap, focusing on both front-end and back-end development using React, Node.js, Python (Django), and more. I’ve previously worked as a Python Developer at BLP Industry.AI and as a Java Developer Intern at Bahwan CyberTek. I love learning new technologies and turning ideas into real-world solutions through clean and efficient code.
            </p>

            {/* Download Resume Button */}
            <motion.a
              href="./Vaishnavi-S.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-pink-700 hover:to-purple-700 transition-all"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
