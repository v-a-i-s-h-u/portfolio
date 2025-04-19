import { motion } from 'framer-motion';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

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
        {/* Section Header */}
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
          {/* Animated Center Line (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-indigo-400 to-indigo-600 animate-pulse shadow-lg rounded-full"
          ></motion.div>

          {/* Experience Timeline Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-16 flex flex-col md:flex-row items-center w-full relative ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              {/* Mobile Top Icon */}
              <div className="md:hidden flex justify-center mb-4">
                <div className="bg-indigo-900/30 shadow w-12 h-12 rounded-full flex items-center justify-center border border-indigo-500/30">
                  {exp.type === 'work' ? (
                    <BriefcaseIcon className="h-6 w-6 text-indigo-400" />
                  ) : (
                    <AcademicCapIcon className="h-6 w-6 text-indigo-400" />
                  )}
                </div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative w-full md:w-5/12 bg-gray-800 rounded-lg border border-gray-700 shadow-xl px-6 py-6 transition-all duration-300 z-10 ${
                  index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                }`}
              >
                <h3 className="mb-2 font-bold text-white text-lg md:text-xl">
                  {exp.type === 'work' ? exp.role : exp.degree}
                </h3>
                <h4 className="mb-2 font-semibold text-indigo-400">
                  {exp.type === 'work' ? exp.company : exp.institution}
                </h4>
                <p className="text-sm text-gray-500 italic mb-2">{exp.duration}</p>
                <p className="text-sm leading-snug tracking-wide text-gray-300">
                  {exp.description}
                </p>
              </motion.div>

              {/* Timeline Icon (Desktop Only) */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
                <div className="bg-indigo-900/30 shadow-lg w-14 h-14 rounded-full flex items-center justify-center border border-indigo-500/30 hover:scale-110 transition-transform duration-300">
                  {exp.type === 'work' ? (
                    <BriefcaseIcon className="h-7 w-7 text-indigo-400" />
                  ) : (
                    <AcademicCapIcon className="h-7 w-7 text-indigo-400" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
