import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Components
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollToTop from '@/components/ScrollToTop';

// Hooks
import { useScrollDirection } from '@/hooks/useScrollDirection';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const scrollDirection = useScrollDirection();
  const [ref] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Background Effects */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-silver-500/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-silver-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Navbar scrollDirection={scrollDirection} />
          </motion.div>

          {/* Main Content */}
          <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            {/* Hero Section */}
            <motion.section variants={itemVariants} ref={ref}>
              <Hero />
            </motion.section>

            {/* About Section */}
            <motion.section variants={itemVariants}>
              <About />
            </motion.section>

            {/* Skills Section */}
            <motion.section variants={itemVariants}>
              <Skills />
            </motion.section>

            {/* Projects Section */}
            <motion.section variants={itemVariants}>
              <Projects />
            </motion.section>

            {/* Experience Section */}
            <motion.section variants={itemVariants}>
              <Experience />
            </motion.section>

          
          </motion.main>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Footer />
          </motion.footer>

          {/* Scroll to Top Button */}
          <ScrollToTop />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
