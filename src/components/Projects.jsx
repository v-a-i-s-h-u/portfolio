import { motion } from 'framer-motion';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'; // Ensure you have this icon library installed

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online store with product listings, cart functionality, and secure checkout.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      codeLink: '#',
      liveLink: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for organizing tasks with drag-and-drop functionality and team collaboration.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      codeLink: '#',
      liveLink: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather information with 5-day forecast and location-based services.',
      tags: ['JavaScript', 'API Integration', 'CSS'],
      image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
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
              className="bg-gray-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-600 hover:border-indigo-500/50"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
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
                    className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors"
                  >
                    <CodeBracketIcon className="h-5 w-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors"
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
