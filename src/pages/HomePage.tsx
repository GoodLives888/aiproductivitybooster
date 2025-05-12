import React from 'react';
import { Helmet } from 'react-helmet-async';
import CTAButton from '../../components/common/CTAButton.tsx'; // Added .tsx extension
import aiHeroGraphic from '../../assets/images/ai_hero_graphic_sample_1.png';
import { motion } from 'framer-motion'; // For animations

const HomePage: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <Helmet>
        <title>AI Productivity Booster | Supercharge Your Workflow</title>
        <meta name="description" content="Discover the best AI tools and strategies to streamline your workflow, save time, and achieve more. Boost your productivity with AIProductivityBooster.com." />
        {/* Add other relevant meta tags like Open Graph, Twitter Cards later if needed */}
      </Helmet>
      <div className="min-h-screen bg-background-main text-text-primary font-sans overflow-x-hidden">
        {/* Hero Section */}
        <motion.section 
          className="relative bg-brand-primary text-white py-24 md:py-40 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[60vh] md:min-h-[75vh] overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="absolute inset-0 opacity-10">
            <img src={aiHeroGraphic} alt="AI Productivity Booster Hero Background" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-8 leading-tight tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Boost Your Productivity with AI
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Discover the best AI tools and strategies to streamline your workflow, save time, and achieve more.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 120 }}
            >
              <CTAButton 
                href="#learn-more" 
                text="Explore AI Solutions Now" 
                variant="primary" 
                size="lg"
                id="cta-hero-explore"
                className="shadow-xl transform hover:scale-105 transition-transform duration-200"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Lead Capture / Newsletter Signup Section */}
        <motion.section
          className="py-20 md:py-28 bg-background-main px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto max-w-3xl text-center bg-white p-8 md:p-12 rounded-xl shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-primary mb-6">Stay Ahead with AI Insights</h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest AI tool reviews, productivity tips, and exclusive guides delivered straight to your inbox. (Lead Capture Placeholder)
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all duration-200 ease-in-out shadow-sm"
                aria-label="Email address for newsletter"
              />
              <CTAButton 
                type="submit" 
                text="Subscribe Now" 
                variant="primary"
                id="cta-newsletter-subscribe"
                className="transform hover:scale-105 transition-transform duration-200 shadow-md"
              />
            </form>
            <p className="text-xs text-text-tertiary mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </motion.section>

        {/* Featured AI Tools Section */}
        <motion.section 
          className="py-20 md:py-28 bg-background-alt px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-text-primary mb-6">Featured AI Tools</h2>
            <p className="text-lg text-text-secondary mb-16 max-w-2xl mx-auto leading-relaxed">
              Handpicked AI solutions to supercharge your tasks. (Dynamic Content/Carousel Placeholder)
            </p>
            <div className="h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 shadow-lg">
              [Product Carousel Placeholder - Minimalist Design]
            </div>
          </div>
        </motion.section>

        {/* Main CTA Section */}
        <motion.section 
          className="py-20 md:py-28 bg-brand-secondary text-white px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-6">Ready to Transform Your Workflow?</h2>
            <p className="text-lg sm:text-xl mb-10 leading-relaxed">
              Unlock the full potential of AI and take your productivity to the next level. Get started with our recommended tools today!
            </p>
            <CTAButton 
              href="#affiliate-link-main" 
              text="Get Top AI Tool (Affiliate)" 
              variant="outline"
              size="lg"
              id="cta-main-affiliate"
              className="border-white text-white hover:bg-white hover:text-brand-secondary transform hover:scale-105 transition-all duration-200 shadow-lg"
            />
          </div>
        </motion.section>

        {/* Special Offer Section */}
        <motion.section 
          className="py-16 bg-background-main px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto text-center p-8 border-2 border-dashed border-brand-accent rounded-xl max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-semibold font-heading text-brand-accent mb-4">Special Offer!</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">Limited time discount on our premium AI guide. (Psychological Trigger Placeholder)</p>
            <CTAButton href="#special-offer" text="Claim Discount Now" variant="primary" id="cta-special-offer" className="transform hover:scale-105 transition-transform duration-200" />
          </div>
        </motion.section>

        {/* Social Proof Section */}
        <motion.section 
          className="py-20 md:py-28 bg-background-alt px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-text-primary text-center mb-16">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i} 
                  className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <p className="text-text-secondary mb-6 italic leading-relaxed">
                    "This AI tool has revolutionized how I manage my tasks. Highly recommended! (Testimonial Placeholder)"
                  </p>
                  <p className="font-semibold text-text-primary text-right">- User {i} (Social Proof Placeholder)</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default HomePage;
