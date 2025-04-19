import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNodeJs, FaGithub, FaBehance } from 'react-icons/fa';
import { SiMongodb, SiFigma, SiTailwindcss, SiExpress } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
    { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
    { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-300" /> },
    { name: 'Behance', icon: <FaBehance className="text-blue-400" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-10"
        >
          My Tech Stack
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center text-gray-300 bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-indigo-500/10 transition-all"
            >
              <div className="text-5xl mb-2">{skill.icon}</div>
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
