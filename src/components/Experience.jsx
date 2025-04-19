import { motion } from 'framer-motion';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline'; // Ensure you have this icon library installed

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      role: 'Full Stack Web Developer Intern',
      company: 'WhyTap (Why Global Services)',
      duration: 'Oct 2024 – Present',
      description:
        'Created mobile-friendly websites using HTML, CSS, and React. Built backend APIs using Node.js and Express, and collaborated with the team to ensure seamless frontend-backend integration.',
    },
    {
      id: 2,
      type: 'work',
      role: 'Office Assistant',
      company: 'Mercury Fittings Pvt. Ltd.',
      duration: 'Oct 2021 – July 2024',
      description:
        'Managed employee data using Excel and ERP software, prepared reports and shift schedules, and supported daily operations in the production department.',
    },
    {
      id: 3,
      type: 'education',
      degree: 'B.Sc. Computer Science',
      institution: `St. Peter's Institute of Higher Education and Research, Chennai`,
      duration: '2018 – 2021',
      description:
        'Studied programming fundamentals, web development concepts, and database management with a focus on practical applications.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Experience & Education
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 h-full w-0.5 bg-gray-800"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-12 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between w-full`}
            >
              <div className={`order-1 w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}></div>
              
              <div className="z-10 flex items-center order-1 bg-indigo-900/30 shadow-xl w-16 h-16 rounded-full border border-indigo-500/30">
                {exp.type === 'work' ? (
                  <BriefcaseIcon className="mx-auto h-8 w-8 text-indigo-400" />
                ) : (
                  <AcademicCapIcon className="mx-auto h-8 w-8 text-indigo-400" />
                )}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`order-1 ${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-800'} rounded-lg shadow-xl w-5/12 px-6 py-4 border border-gray-700`}
              >
                <h3 className="mb-2 font-bold text-white text-xl">
                  {exp.type === 'work' ? exp.role : exp.degree}
                </h3>
                <h4 className="mb-2 font-semibold text-indigo-400">
                  {exp.type === 'work' ? exp.company : exp.institution}
                </h4>
                <p className="text-sm text-gray-500 italic mb-2">
                  {exp.duration}
                </p>
                <p className="text-sm leading-snug tracking-wide text-gray-300">
                  {exp.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
