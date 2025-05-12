import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Placeholder data - in a real app, this would come from a CMS or API
const posts = [
  { slug: 'top-5-ai-tools-for-writing', title: 'Top 5 AI Tools for Enhanced Writing Productivity', excerpt: 'Discover AI tools that can help you write faster, smarter, and more effectively. This is a placeholder.' },
  { slug: 'how-ai-streamlines-project-management', title: 'How AI Streamlines Project Management in 2025', excerpt: 'Learn about AI-powered project management solutions that can automate tasks and improve team collaboration. Placeholder content.' },
  { slug: 'ai-for-everyday-productivity-a-beginners-guide', title: "AI for Everyday Productivity: A Beginner's Guide", excerpt: 'New to AI? This guide introduces simple AI tools you can use daily to boost your efficiency. Placeholder text.' },
];

const BlogListPage: React.FC = () => {
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <Helmet>
        <title>Blog | AI Productivity Insights | AIProductivityBooster.com</title>
        <meta name="description" content="Explore insightful articles, guides, and reviews on the latest AI tools and strategies to boost your productivity. Stay updated with AIProductivityBooster.com's blog." />
      </Helmet>
      <motion.div 
        className="container mx-auto p-6 md:p-8 lg:p-12 min-h-screen font-sans"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
      >
        <motion.h1 
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-center text-brand-primary tracking-tight"
          variants={itemVariants}
        >
          AI Productivity Insights
        </motion.h1>
        <motion.div 
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={pageVariants} // Use pageVariants for stagger effect on children
        >
          {posts.map((post, index) => (
            <motion.div 
              key={post.slug} 
              className="border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out bg-white flex flex-col group transform hover:-translate-y-1"
              variants={itemVariants}
              custom={index} // for potential staggered animation if needed directly on items
            >
              <h2 className="font-heading text-xl sm:text-2xl font-semibold mb-4">
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="text-brand-primary hover:text-brand-accent transition-colors duration-300 ease-in-out group-hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="font-sans text-base text-text-secondary mb-6 flex-grow leading-relaxed">{post.excerpt}</p>
              <Link 
                to={`/blog/${post.slug}`} 
                className="text-brand-accent hover:underline font-semibold font-sans self-start transition-colors duration-300 ease-in-out mt-auto inline-flex items-center group"
              >
                Read More <span className="ml-1 transition-transform duration-200 ease-in-out group-hover:translate-x-1">&rarr;</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default BlogListPage;

