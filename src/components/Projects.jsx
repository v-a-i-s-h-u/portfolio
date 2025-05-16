//Projects.jsx
import { motion } from 'framer-motion';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';

const Projects = () => {
const projects = [
  {
    id: 1,
    title: 'Cab Booking Service',
    description: 'A responsive cab booking app built with React.js featuring ride selection, fare estimation, and booking confirmation.',
    tags: ['React.js', 'React Router', 'CSS'],
    image: 'https://images.pexels.com/photos/4386367/pexels-photo-4386367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
    codeLink: '#',
    liveLink: '#',
  },
  {
    id: 2,
    title: 'E-commerce Website',
    description: 'A full-stack MERN application with user authentication, product management, cart, and admin panel features.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    image: 'https://images.pexels.com/photos/5632385/pexels-photo-5632385.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
    codeLink: '#',
    liveLink: '#',
  },
  {
    id: 3,
    title: 'Tissue Cell Classification',
    description: 'A deep learning CAD system for classifying lung tissues as benign or malignant using RCNN.',
    tags: ['Python', 'Deep Learning', 'RCNN'],
    image: 'https://images.pexels.com/photos/3735717/pexels-photo-3735717.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
    codeLink: '#',
    liveLink: '#',
  },
];



  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-gray-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-600 hover:border-indigo-500/50 hover:shadow-2xl transform hover:scale-[1.02] hover:ring-1 hover:ring-indigo-400/30"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-900/30 text-indigo-400 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.codeLink}
                    className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors duration-300 hover:scale-105"
                  >
                    <CodeBracketIcon className="h-5 w-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors duration-300 hover:scale-105"
                  >
                    <EyeIcon className="h-5 w-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
