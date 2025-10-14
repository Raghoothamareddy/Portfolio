import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '@/data/portfolio';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const skillCategories = {
    programming: skills.filter(skill => skill.category === 'programming'),
    framework: skills.filter(skill => skill.category === 'framework'),
    ml: skills.filter(skill => skill.category === 'ml'),
    database: skills.filter(skill => skill.category === 'database'),
    cloud: skills.filter(skill => skill.category === 'cloud'),
    tools: skills.filter(skill => skill.category === 'tools')
  };

  const categoryTitles = {
    programming: 'Programming Languages',
    framework: 'Frameworks & Technologies',
    ml: 'Machine Learning & AI',
    database: 'Databases',
    cloud: 'Cloud & DevOps',
    tools: 'Developer Tools'
  };

  const getSkillIcon = () => {
    // In a real project, you'd use actual icon components or SVGs
    return `🚀`; // Placeholder
  };

  return (
    <section id="skills" className="section-padding">
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
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-primary-500 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-secondary-300 max-w-3xl mx-auto leading-relaxed"
          >
            Here are the technologies and tools I work with to bring ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-primary-400 mb-6">
                {categoryTitles[category as keyof typeof categoryTitles]}
              </h3>
              
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-secondary-800/50 rounded-lg border border-secondary-700/50 hover:border-primary-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{getSkillIcon()}</span>
                        <span className="font-medium text-white">{skill.name}</span>
                      </div>
                      <span className="text-primary-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-secondary-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-primary-400 mb-8">
            Always Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Machine Learning',
              'Blockchain',
              'Mobile Development',
              'DevOps',
              'Cloud Architecture',
              'Microservices'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-secondary-700/50 text-secondary-300 rounded-full text-sm border border-secondary-600/50 hover:border-primary-500/50 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
