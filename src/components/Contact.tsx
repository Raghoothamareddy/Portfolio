import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '@/data/portfolio';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // });

  // const [isSubmitting, setIsSubmitting] = useState(false);

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

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate form submission
  //   await new Promise(resolve => setTimeout(resolve, 2000));
    
  //   // Reset form
  //   setFormData({ name: '', email: '', subject: '', message: '' });
  //   setIsSubmitting(false);
    
  //   // Show success message (you can implement a toast notification here)
  //   alert('Message sent successfully!');
  // };

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: personalInfo.contact.email,
      href: `mailto:${personalInfo.contact.email}`
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: personalInfo.contact.phone || 'Available on request',
      href: personalInfo.contact.phone ? `tel:${personalInfo.contact.phone}` : undefined
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: personalInfo.contact.location,
      href: undefined
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.contact.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalInfo.contact.linkedin, label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary-800/30">
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-primary-500 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-secondary-300 max-w-3xl mx-auto leading-relaxed"
          >
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-primary-400 mb-6"
            >
              Let's Connect
            </motion.h3>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-4 p-4 bg-secondary-800/50 rounded-lg border border-secondary-700/50 hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{method.label}</h4>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-secondary-300">{method.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="pt-8"
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-secondary-700 hover:bg-primary-600 rounded-lg flex items-center justify-center text-secondary-300 hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-lg border border-primary-500/20"
            >
              <h4 className="text-lg font-semibold text-primary-400 mb-2">
                Availability
              </h4>
              <p className="text-secondary-300">
                I'm currently available for freelance projects and full-time opportunities. 
                Let's discuss your project and how I can help bring your ideas to life.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
