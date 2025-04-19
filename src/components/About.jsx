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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/3 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="relative rounded-2xl w-64 h-64 object-cover shadow-xl border-2 border-gray-800"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-2/3 text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
  I&apos;m Prem Kumar J, a Full Stack Developer
</h3>
<p className="text-gray-400 mb-6">
  I am a fresher in full-stack web development with hands-on experience in React, Node.js, MongoDB, and other modern technologies. I recently completed a 6-month internship at WhyTap as a Full Stack Web Developer, where I gained practical exposure to building real-world web applications. Prior to this, I worked for 2 years and 10 months as an Office Assistant in a manufacturing company, where I developed strong skills in data handling, organization, and communication. I&apos;m now excited to combine my technical skills and professional experience to contribute meaningfully to web development projects.
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
        </div>
      </div>
    </section>
  );
};

export default About;
