import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
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
        <title>Contact Us | AIProductivityBooster.com</title>
        <meta name="description" content="Get in touch with AIProductivityBooster.com for inquiries, suggestions, or partnership opportunities. Contact Pete Armstrong at admin@aiproductivitybooster.com." />
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
          Contact Us
        </motion.h1>
        
        <motion.div 
          className="bg-white shadow-xl rounded-lg p-6 md:p-8 lg:p-10 max-w-2xl mx-auto"
          variants={itemVariants}
          transition={{ delay: 0.1 }}
        >
          <div className="prose prose-lg sm:prose-xl max-w-none text-text-primary leading-relaxed">
            <motion.p className="mb-6" variants={itemVariants} transition={{ delay: 0.2 }}>
              For any inquiries, suggestions, or partnership opportunities, please feel free to reach out to Pete Armstrong.
            </motion.p>
            <motion.p className="mb-6" variants={itemVariants} transition={{ delay: 0.3 }}>
              Email: <motion.a href="mailto:admin@aiproductivitybooster.com" className="text-brand-accent hover:underline focus:outline-none focus:ring-2 focus:ring-brand-accent/50 rounded" variants={itemVariants} whileHover={{ scale: 1.05 }} transition={{type: 'spring', stiffness: 400}}>admin@aiproductivitybooster.com</motion.a>
            </motion.p>
            <motion.p variants={itemVariants} transition={{ delay: 0.4 }}>
              We aim to respond to all queries within 24-48 business hours.
            </motion.p>
            {/* Placeholder for a future contact form, as per project plan */}
            <motion.div className="mt-10 pt-6 border-t border-gray-200 text-center" variants={itemVariants} transition={{delay: 0.5}}>
                <p className="text-sm text-text-secondary">Alternatively, you can use the contact form below (coming soon).</p>
                <div className="mt-4 h-32 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 italic">
                    Contact Form Placeholder
                </div>
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </>
  );
};

export default ContactPage;

