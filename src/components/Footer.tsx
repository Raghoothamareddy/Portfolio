import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '@/data/portfolio';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.contact.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalInfo.contact.linkedin, label: 'LinkedIn' },
    { icon: FaEnvelope, href: `mailto:${personalInfo.contact.email}`, label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-secondary-900 border-t border-secondary-800">
      <div className="container-max">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold gradient-text">
                {personalInfo.name}
              </h3>
              <p className="text-secondary-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-secondary-400 hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-secondary-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">
                Get In Touch
              </h4>
              <div className="space-y-2">
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="block text-secondary-400 hover:text-primary-400 transition-colors duration-300"
                >
                  {personalInfo.contact.email}
                </a>
                {personalInfo.contact.phone && (
                  <a
                    href={`tel:${personalInfo.contact.phone}`}
                    className="block text-secondary-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {personalInfo.contact.phone}
                  </a>
                )}
                <p className="text-secondary-400">
                  {personalInfo.contact.location}
                </p>
              </div>
              
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm"
              >
                <span>View Resume</span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-secondary-800 py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
