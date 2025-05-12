import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const PrivacyPolicyPage: React.FC = () => {
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
        <title>Privacy Policy | AIProductivityBooster.com</title>
        <meta name="description" content="Read the Privacy Policy for AIProductivityBooster.com to understand how we collect, use, and protect your personal information." />
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
          Privacy Policy
        </motion.h1>
        
        <motion.div 
          className="bg-white shadow-xl rounded-lg p-6 md:p-8 lg:p-10"
          variants={itemVariants}
          transition={{ delay: 0.1 }}
        >
          <motion.p 
            className="font-sans text-xs sm:text-sm text-text-secondary mb-6 italic"
            variants={itemVariants} 
            transition={{ delay: 0.15 }}
          >
            <strong>Last Updated: {new Date().toLocaleDateString()}</strong> (This is a placeholder policy)
          </motion.p>
          
          <div className="prose prose-lg sm:prose-xl max-w-none text-text-primary leading-relaxed">
            <motion.section variants={itemVariants} transition={{ delay: 0.2 }} className="mb-6">
              <h2 className="font-heading text-xl sm:text-2xl font-semibold mt-6 mb-3 text-brand-secondary">1. Introduction</h2>
              <p className="mb-4">
                Welcome to AIProductivityBooster.com ("us", "we", or "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at <motion.a href="mailto:admin@aiproductivitybooster.com" className="text-brand-accent hover:underline focus:outline-none focus:ring-2 focus:ring-brand-accent/50 rounded" whileHover={{ scale: 1.05 }} transition={{type: 'spring', stiffness: 400}}>admin@aiproductivitybooster.com</motion.a>.
              </p>
              <p className="mb-4">
                This privacy notice describes how we might use your information if you visit our website at AIProductivityBooster.com. <strong className="text-red-600">This is a placeholder privacy policy and should be reviewed and updated by a legal professional to ensure compliance with all applicable laws and regulations.</strong>
              </p>
            </motion.section>

            <motion.section variants={itemVariants} transition={{ delay: 0.3 }} className="mb-6">
              <h2 className="font-heading text-xl sm:text-2xl font-semibold mt-6 mb-3 text-brand-secondary">2. Information We Collect (Placeholder)</h2>
              <p className="mb-4">
                As an affiliate marketing website, we may collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us. We may also collect information automatically when you navigate through the site (e.g., usage details, IP addresses, and information collected through cookies).
              </p>
            </motion.section>

            <motion.section variants={itemVariants} transition={{ delay: 0.4 }} className="mb-6">
              <h2 className="font-heading text-xl sm:text-2xl font-semibold mt-6 mb-3 text-brand-secondary">3. How We Use Your Information (Placeholder)</h2>
              <p className="mb-4">
                We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} transition={{ delay: 0.5 }} className="mb-6">
              <h2 className="font-heading text-xl sm:text-2xl font-semibold mt-6 mb-3 text-brand-secondary">4. Will Your Information Be Shared With Anyone? (Placeholder)</h2>
              <p className="mb-4">
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may share data with third-party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work.
              </p>
              <p className="mb-4">
                As an affiliate marketing website, clicking on affiliate links may direct you to third-party websites with their own privacy policies. We are not responsible for the privacy practices of these external sites.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} transition={{ delay: 0.6 }} className="mb-6">
              <h2 className="font-heading text-xl sm:text-2xl font-semibold mt-6 mb-3 text-brand-secondary">5. Cookies and Other Tracking Technologies (Placeholder)</h2>
              <p className="mb-4">
                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy (Placeholder - to be created if necessary).
              </p>
            </motion.section>

            <motion.section variants={itemVariants} transition={{ delay: 0.7 }} className="mb-6">
              <h2 className="font-heading text-xl sm:text-2xl font-semibold mt-6 mb-3 text-brand-secondary">6. Changes to This Privacy Notice</h2>
              <p className="mb-4">
                We may update this privacy notice from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} transition={{ delay: 0.8 }} className="mb-6">
              <h2 className="font-heading text-xl sm:text-2xl font-semibold mt-6 mb-3 text-brand-secondary">7. Contact Us</h2>
              <p className="mb-4">
                If you have questions or comments about this notice, you may email us at <motion.a href="mailto:admin@aiproductivitybooster.com" className="text-brand-accent hover:underline focus:outline-none focus:ring-2 focus:ring-brand-accent/50 rounded" whileHover={{ scale: 1.05 }} transition={{type: 'spring', stiffness: 400}}>admin@aiproductivitybooster.com</motion.a> or by post to Pete Armstrong (Physical address if applicable - Placeholder).
              </p>
            </motion.section>
          </div>
        </motion.div>

      </motion.div>
    </>
  );
};

export default PrivacyPolicyPage;

