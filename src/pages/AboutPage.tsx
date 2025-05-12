import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <Helmet>
        <title>About Us | AIProductivityBooster.com</title>
        <meta name="description" content="Learn more about AIProductivityBooster.com, our mission to help you leverage AI for enhanced productivity, and Pete Armstrong, the curator of this site." />
      </Helmet>
      <motion.div 
        className="container mx-auto p-6 md:p-8 lg:p-12 min-h-screen font-sans"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
      >
        <motion.h1 
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-brand-primary text-center md:text-left tracking-tight"
          variants={itemVariants}
        >
          About AIProductivityBooster.com
        </motion.h1>
        
        <motion.div 
          className="bg-white shadow-xl rounded-lg p-6 md:p-8 lg:p-10"
          variants={itemVariants}
          transition={{ delay: 0.1 }}
        >
          <div className="prose prose-lg sm:prose-xl max-w-none text-text-primary leading-relaxed">
            <motion.p className="mb-6" variants={itemVariants} transition={{ delay: 0.2 }}>
              Welcome to AIProductivityBooster.com, your premier resource for discovering and leveraging the power of Artificial Intelligence to enhance your productivity and streamline your workflows.
            </motion.p>
            <motion.p className="mb-6" variants={itemVariants} transition={{ delay: 0.3 }}>
              Our mission is to provide comprehensive reviews, insightful guides, and up-to-date information on the latest AI tools and services. Whether you are a professional, entrepreneur, student, or simply curious about AI, we aim to help you find the right solutions to achieve your goals more efficiently.
            </motion.p>
            <motion.p className="mb-6" variants={itemVariants} transition={{ delay: 0.4 }}>
              This website is curated by Pete Armstrong (<motion.a href="mailto:admin@aiproductivitybooster.com" className="text-brand-accent hover:underline focus:outline-none focus:ring-2 focus:ring-brand-accent/50 rounded" variants={itemVariants} whileHover={{ scale: 1.05 }} transition={{type: 'spring', stiffness: 400}}>admin@aiproductivitybooster.com</motion.a>), dedicated to exploring the cutting edge of AI technology and its practical applications.
            </motion.p>
            <motion.p variants={itemVariants} transition={{ delay: 0.5 }}>
              Stay tuned as we build out our content and bring you the best in AI productivity!
            </motion.p>
          </div>
        </motion.div>

      </motion.div>
    </>
  );
};

export default AboutPage;

