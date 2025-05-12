import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Image as ImageIcon } from 'lucide-react';

interface DetailedGuideProps {
  title: string;
  introduction: string[]; // Array of paragraphs
  sections: Array<{
    id: string; // for key prop
    heading: string;
    subsections?: Array<{
      id: string; // for key prop
      subheading: string;
      content: string[]; // Array of paragraphs
      imageUrl?: string;
      imageAlt?: string;
      codeBlock?: {
        language: string;
        code: string;
      };
      affiliateLink?: {
        text: string;
        url: string;
      };
    }>;
    content?: string[]; // For sections without subsections
  }>;
  conclusion: string[]; // Array of paragraphs
  relatedProducts?: Array<{
    id: string; // for key prop
    name: string;
    affiliateLink: string;
  }>;
}

const DetailedGuideTemplate: React.FC<DetailedGuideProps> = ({
  title,
  introduction,
  sections,
  conclusion,
  relatedProducts,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.article 
      className="my-10 p-4 sm:p-6 md:p-8 lg:p-10 bg-white shadow-2xl rounded-xl font-sans max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header 
        className="mb-8 pb-6 border-b border-gray-200"
        variants={sectionVariants}
      >
        <motion.h1 
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary mb-4 tracking-tight"
          variants={itemVariants}
        >
          {title}
        </motion.h1>
      </motion.header>

      <motion.section 
        className="mb-8 prose prose-lg sm:prose-xl max-w-none text-text-primary leading-relaxed"
        variants={sectionVariants}
      >
        {introduction.map((paragraph, index) => (
          <motion.p key={`intro-${index}`} className="mb-4" variants={itemVariants} custom={index} transition={{delay: index * 0.1}}>{paragraph}</motion.p>
        ))}
      </motion.section>

      {sections.map((section, sectionIndex) => (
        <motion.section 
          key={section.id} 
          className="mb-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="font-heading text-2xl sm:text-3xl font-semibold text-brand-secondary mt-8 mb-6 pb-3 border-b border-gray-200 flex items-center"
            variants={itemVariants}
          >
            {/* Optional: Add an icon here if relevant to section type */}
            {section.heading}
          </motion.h2>
          {section.content && section.content.map((paragraph, pIndex) => (
            <motion.p 
              key={`section-content-${pIndex}`} 
              className="mb-4 leading-relaxed prose prose-lg sm:prose-xl max-w-none text-text-primary"
              variants={itemVariants} custom={pIndex} transition={{delay: pIndex * 0.1}}
            >
              {paragraph}
            </motion.p>
          ))}
          {section.subsections && section.subsections.map((subsection, subIndex) => (
            <motion.div 
              key={subsection.id} 
              className="mb-8 ml-0 md:ml-6 pl-0 md:pl-6 border-l-0 md:border-l-4 border-brand-accent/30 py-2"
              variants={itemVariants} custom={subIndex} transition={{delay: subIndex * 0.15}}
            >
              <motion.h3 
                className="font-heading text-xl sm:text-2xl font-medium text-brand-secondary mb-4 flex items-center"
                variants={itemVariants}
              >
                {subsection.subheading}
              </motion.h3>
              {subsection.content.map((paragraph, pIndex) => (
                <motion.p 
                  key={`sub-content-${pIndex}`} 
                  className="mb-4 leading-relaxed prose prose-lg sm:prose-xl max-w-none text-text-primary"
                  variants={itemVariants} custom={pIndex} transition={{delay: pIndex * 0.1}}
                >
                  {paragraph}
                </motion.p>
              ))}
              {subsection.imageUrl && (
                <motion.div 
                  className="my-6 rounded-lg overflow-hidden shadow-lg bg-gray-100 p-2 group transform hover:scale-105 transition-transform duration-300 ease-out"
                  variants={itemVariants}
                >
                  <img src={subsection.imageUrl} alt={subsection.imageAlt || subsection.subheading} className="w-full h-auto max-h-[500px] object-contain rounded-md" />
                </motion.div>
              )}
              {subsection.codeBlock && (
                <motion.div 
                  className="my-6 p-4 bg-gray-800 text-gray-100 rounded-lg shadow-md overflow-x-auto relative group"
                  variants={itemVariants}
                >
                  <div className="absolute top-2 right-2 opacity-50 group-hover:opacity-100 transition-opacity duration-200">
                    <Code size={20} className="text-gray-400" />
                  </div>
                  <pre><code className={`language-${subsection.codeBlock.language} text-sm sm:text-base`}>{subsection.codeBlock.code}</code></pre>
                </motion.div>
              )}
              {subsection.affiliateLink && (
                <motion.p 
                  className="my-5 font-sans text-center sm:text-left"
                  variants={itemVariants}
                >
                  <motion.a 
                    href={subsection.affiliateLink.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-accent hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-all duration-150 ease-in-out transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {subsection.affiliateLink.text}
                    <ExternalLink size={18} className="ml-2" />
                  </motion.a>
                </motion.p>
              )}
            </motion.div>
          ))}
        </motion.section>
      ))}

      <motion.section 
        className="mt-10 pt-8 border-t border-gray-200 prose prose-lg sm:prose-xl max-w-none text-text-primary leading-relaxed"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          className="font-heading text-2xl sm:text-3xl font-semibold text-brand-secondary mb-5"
          variants={itemVariants}
        >
          Conclusion
        </motion.h2>
        {conclusion.map((paragraph, index) => (
          <motion.p key={`conclusion-${index}`} className="mb-4" variants={itemVariants} custom={index} transition={{delay: index * 0.1}}>{paragraph}</motion.p>
        ))}
      </motion.section>

      {relatedProducts && relatedProducts.length > 0 && (
        <motion.section 
          className="mt-10 pt-8 border-t border-gray-200"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="font-heading text-xl sm:text-2xl font-semibold text-brand-secondary mb-6"
            variants={itemVariants}
          >
            Related AI Tools You Might Like:
          </motion.h2>
          <motion.ul 
            className="space-y-3 font-sans list-none p-0"
            variants={containerVariants} // Stagger children for list items
          >
            {relatedProducts.map((product, index) => (
              <motion.li 
                key={product.id} 
                className="text-text-primary p-3 bg-gray-50 hover:bg-brand-accent/10 rounded-md transition-colors duration-200 ease-in-out"
                variants={itemVariants} custom={index} transition={{delay: index * 0.1}}
              >
                <motion.a 
                  href={product.affiliateLink} 
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                  className="flex items-center justify-between text-brand-accent hover:underline font-semibold group"
                  whileHover={{ x: 5 }} 
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span>{product.name}</span>
                  <ExternalLink size={18} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>
      )}
    </motion.article>
  );
};

export default DetailedGuideTemplate;

// Example Usage (can be placed on a page component, likely a dynamic blog post page):
/*
const guideData = {
  title: "Mastering AI for Email Marketing: A Comprehensive Guide",
  introduction: [
    "Email marketing remains a cornerstone of digital strategy, and AI is revolutionizing how we approach it. This guide will walk you through the best AI tools and techniques to enhance your email campaigns, from generation to personalization and analysis.",
    "Whether you're a seasoned marketer or just starting, leveraging AI can save you time, improve engagement, and ultimately drive better results."
  ],
  sections: [
    {
      id: "s1",
      heading: "Understanding AI in Email Marketing",
      content: ["AI can assist in various aspects of email marketing, including... (general overview)"]
    },
    {
      id: "s2",
      heading: "Top AI Tools for Email Content Generation",
      subsections: [
        {
          id: "ss1",
          subheading: "Tool 1: AI Email Writer Pro",
          content: ["AI Email Writer Pro excels at crafting compelling subject lines and email body copy. Its key features include...", "We found it particularly useful for generating A/B test variations quickly."],
          imageUrl: "/placeholder-tool1.jpg",
          imageAlt: "AI Email Writer Pro Interface",
          affiliateLink: { text: "Try AI Email Writer Pro", url: "#affiliate-emailwriterpro" }
        },
        {
          id: "ss2",
          subheading: "Tool 2: SubjectLine Optimizer AI",
          content: ["This tool focuses specifically on optimizing subject lines for higher open rates using predictive analytics..."],
          codeBlock: { language: "json", code: JSON.stringify({ feature: "Predictive Analysis", accuracy: "92%" }, null, 2) }
        }
      ]
    },
    {
      id: "s3",
      heading: "Personalization with AI",
      content: ["AI algorithms can analyze customer data to deliver highly personalized email content at scale...", "Examples include dynamic content blocks, product recommendations, and send-time optimization."]
    }
  ],
  conclusion: [
    "Incorporating AI into your email marketing strategy is no longer a luxury but a necessity for staying competitive. By choosing the right tools and applying the techniques discussed in this guide, you can significantly elevate your campaigns.",
    "Start exploring these AI solutions today and unlock new levels of productivity and engagement."
  ],
  relatedProducts: [
    { id: "rp1", name: "AI Analytics Suite for Email", affiliateLink: "#affiliate-analytics" },
    { id: "rp2", name: "CRM with AI Email Integration", affiliateLink: "#affiliate-crm" }
  ]
};

<DetailedGuideTemplate {...guideData} />
*/

