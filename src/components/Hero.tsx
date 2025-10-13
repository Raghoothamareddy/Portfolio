import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { personalInfo } from '@/data/portfolio';
import Typewriter from 'typewriter-effect';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.contact.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalInfo.contact.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, href: personalInfo.contact.twitter, label: 'Twitter' },
    { icon: FaEnvelope, href: `mailto:${personalInfo.contact.email}`, label: 'Email' }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative hero-section">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800" />
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(234, 179, 8, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Main Content */}
      <div className="container-max section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Professional Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center space-x-2 text-gold-400 font-mono text-sm tracking-wider uppercase">
              <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
              <span>Available for opportunities</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block text-white mb-2">Hello, I'm</span>
            <span className="block gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Professional Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-xl md:text-2xl text-gold-400 font-medium min-h-[2.5rem] flex items-center justify-center">
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Software Engineer',
                    '.NET Specialist',
                    'Azure Cloud Developer',
                    'Machine Learning Engineer',
                    'Master\'s Student'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </div>
          </motion.div>

          {/* Professional Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-silver-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Master of Science in Computer Science candidate with 2.5+ years of professional experience in full-stack software engineering using the .NET framework. Proven ability in developing, modernizing, and deploying cloud-native applications on Microsoft Azure.
          </motion.p>

          {/* Professional CTA Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <div className="relative bg-transparent border-2 border-gold-500 text-gold-400 font-semibold px-8 py-4 transition-all duration-300 group-hover:text-dark-900 group-hover:border-transparent">
                View My Work
              </div>
            </motion.a>
            
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 font-semibold px-8 py-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gold-500/50">
                Download Resume
              </div>
            </motion.a>
          </motion.div>

          {/* Professional Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-8 mb-20"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="group relative"
                aria-label={social.label}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-silver-500/10 to-silver-600/10 backdrop-blur-sm border border-silver-500/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-gold-400/50 group-hover:bg-gold-500/10">
                  <social.icon className="w-5 h-5 text-silver-400 group-hover:text-gold-400 transition-colors duration-300" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Professional Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="flex flex-col items-center text-silver-500 hover:text-gold-400 transition-colors duration-300 cursor-pointer group"
            >
              <span className="text-xs mb-4 font-mono tracking-wider uppercase">Explore More</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-8 h-8 border-2 border-silver-500/30 rounded-full flex items-center justify-center group-hover:border-gold-400/50 transition-colors duration-300"
              >
                <FaArrowDown className="w-3 h-3 text-silver-500 group-hover:text-gold-400 transition-colors duration-300" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
