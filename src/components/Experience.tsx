import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { experiences, education } from '@/data/portfolio';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Experience & <span className="gradient-text">Education</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-primary-500 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-secondary-300 max-w-3xl mx-auto leading-relaxed"
          >
            My professional journey and educational background that shaped my career.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-semibold text-primary-400 mb-8 flex items-center"
            >
              <FaBriefcase className="w-8 h-8 mr-3" />
              Experience
            </motion.h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-primary-500/30"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full border-4 border-secondary-900" />
                  
                  {/* Current Job Indicator */}
                  {exp.current && (
                    <div className="absolute -left-1 top-0 w-6 h-6 bg-primary-500 rounded-full animate-pulse" />
                  )}

                  <div className="bg-secondary-800/50 p-6 rounded-lg border border-secondary-700/50 hover:border-primary-500/50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-xl font-semibold text-white">
                        {exp.position}
                      </h4>
                      <div className="flex items-center text-primary-400 text-sm mt-2 sm:mt-0">
                        <FaCalendarAlt className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                    </div>
                    
                    <h5 className="text-lg text-primary-400 mb-3">
                      {exp.company}
                    </h5>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-secondary-300 flex items-start">
                          <span className="text-primary-500 mr-2 mt-1">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-secondary-700/50 text-secondary-300 text-sm rounded-full border border-secondary-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-semibold text-primary-400 mb-8 flex items-center"
            >
              <FaMapMarkerAlt className="w-8 h-8 mr-3" />
              Education
            </motion.h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-primary-500/30"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full border-4 border-secondary-900" />

                  <div className="bg-secondary-800/50 p-6 rounded-lg border border-secondary-700/50 hover:border-primary-500/50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-xl font-semibold text-white">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center text-primary-400 text-sm mt-2 sm:mt-0">
                        <FaCalendarAlt className="w-4 h-4 mr-2" />
                        {edu.duration}
                      </div>
                    </div>
                    
                    <h5 className="text-lg text-primary-400 mb-3">
                      {edu.institution}
                    </h5>

                    {edu.description && (
                      <p className="text-secondary-300 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Summary */}
            <motion.div
              variants={itemVariants}
              className="mt-12 bg-gradient-to-r from-primary-500/10 to-primary-600/10 p-6 rounded-lg border border-primary-500/20"
            >
              <h4 className="text-xl font-semibold text-primary-400 mb-4">
                Key Achievements
              </h4>
              <ul className="space-y-2 text-secondary-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2 mt-1">•</span>
                  Led development of applications serving 100K+ users
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2 mt-1">•</span>
                  Improved application performance by 40% through optimization
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2 mt-1">•</span>
                  Mentored junior developers and established best practices
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2 mt-1">•</span>
                  Reduced development time by 30% through reusable components
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
