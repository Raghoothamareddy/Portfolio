import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaRocket, FaHeart, FaAward } from 'react-icons/fa';
import { personalInfo } from '@/data/portfolio';

const About: React.FC = () => {
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

  const stats = [
    { icon: FaCode, number: '6+', label: 'Major Projects' },
    { icon: FaRocket, number: '2.5+', label: 'Years Experience' },
    { icon: FaHeart, number: '5', label: 'Certifications' },
    { icon: FaAward, number: '94%', label: 'ML Model Accuracy' }
  ];

  const skills = [
    'C# & .NET Framework',
    '.NET MAUI & Blazor',
    'Microsoft Azure',
    'Machine Learning & AI',
    'SQL Server & PostgreSQL',
    'Agile Development'
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-dark-900/50 via-transparent to-dark-800/50" />
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-gold-500/10 to-silver-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-32 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto mb-8 rounded-full"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-silver-300 max-w-4xl mx-auto leading-relaxed"
          >
            I'm a passionate full-stack developer who loves creating innovative solutions 
            and building scalable applications that make a real impact.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="frost-card">
              <h3 className="text-2xl font-semibold mb-4 text-gold-400 flex items-center">
                <span className="mr-3">🚀</span>
                My Journey
              </h3>
              <p className="text-silver-300 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-silver-300 leading-relaxed">
                I specialize in creating modern, responsive web applications using the latest 
                technologies. My goal is to write clean, maintainable code and deliver 
                exceptional user experiences.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="gold-card">
              <h3 className="text-2xl font-semibold mb-6 text-gold-300 flex items-center">
                <span className="mr-3">⚡</span>
                What I Do
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-3 p-4 silver-glass rounded-xl group"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full group-hover:animate-pulse" />
                    <span className="text-silver-300 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <a
                href={personalInfo.resumeUrl}
                download
                className="frost-button inline-flex items-center space-x-2 group"
              >
                <span>📄</span>
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats & Image */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 gold-card group"
                >
                  <stat.icon className="w-8 h-8 text-gold-400 mx-auto mb-3 group-hover:text-gold-300 transition-colors duration-300" />
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-gold-200 transition-colors duration-300">{stat.number}</div>
                  <div className="text-sm text-silver-400 group-hover:text-silver-300 transition-colors duration-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative flex justify-center"
            >
              <div className="relative w-80 h-80">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full blur-2xl opacity-40"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative w-full h-full frost-glass rounded-full p-2">
                  <div className="w-full h-full bg-gradient-to-br from-dark-900 to-dark-800 rounded-full flex items-center justify-center">
                    <motion.div 
                      className="w-32 h-32 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-4xl font-bold text-dark-900 shadow-2xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
