import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Placeholder data - in a real app, this would come from a CMS or API
const posts: { [key: string]: { title: string; content: string[], category?: string, date?: string, excerpt?: string } } = {
  'top-5-ai-tools-for-writing': {
    title: 'Top 5 AI Tools for Enhanced Writing Productivity',
    category: 'AI Tools',
    date: 'May 10, 2025',
    excerpt: 'Discover five leading AI-powered writing tools that can significantly boost your productivity, enhance quality, and streamline your content creation process.',
    content: [
      'In the rapidly evolving digital landscape, AI-powered writing tools have become indispensable for content creators, marketers, and professionals alike. These tools not only accelerate the writing process but also enhance quality and creativity. Here’s a look at five top AI tools that can significantly boost your writing productivity. (This is placeholder content).',
      '1. AI Writing Assistant X: Known for its intuitive interface and powerful suggestion engine... (Placeholder detail).',
      '2. Grammar & Style Checker Y: Goes beyond basic spell-checking to offer nuanced style improvements... (Placeholder detail).',
      '3. Content Idea Generator Z: Helps overcome writer\"s block by suggesting relevant topics and outlines... (Placeholder detail).',
      '4. SEO Optimization Tool A: Ensures your content is not just well-written but also discoverable... (Placeholder detail).',
      '5. Plagiarism Checker B: Guarantees originality and helps maintain academic or professional integrity... (Placeholder detail).',
      'Integrating these tools into your workflow can save hours of manual effort and elevate the standard of your written communication. Explore them to find the best fit for your needs! (Placeholder conclusion).'
    ]
  },
  'how-ai-streamlines-project-management': {
    title: 'How AI Streamlines Project Management in 2025',
    category: 'Project Management',
    date: 'May 08, 2025',
    excerpt: 'Explore how Artificial Intelligence is revolutionizing project management by automating tasks, providing insightful analytics, and improving team collaboration for greater efficiency.',
    content: [
      'Project management is a complex field requiring meticulous planning, execution, and monitoring. AI is revolutionizing this domain by automating repetitive tasks, providing insightful analytics, and improving team collaboration. This article explores how AI is streamlining project management. (Placeholder content).',
      'Key areas include: Automated Task Scheduling, Predictive Risk Analysis, Intelligent Resource Allocation, Enhanced Communication... (Placeholder details).'
    ]
  },
  'ai-for-everyday-productivity-a-beginners-guide': {
    title: "AI for Everyday Productivity: A Beginner's Guide",
    category: 'Productivity Tips',
    date: 'May 05, 2025',
    excerpt: "New to AI? This beginner's guide introduces simple yet powerful AI tools and applications that can enhance your everyday productivity and simplify daily tasks.",
    content: [
      "Artificial Intelligence isn't just for tech gurus; it offers a plethora of tools that can simplify daily tasks for everyone. This beginner\"s guide introduces accessible AI applications that can enhance your everyday productivity. (Placeholder content).",
      'Examples include: Smart Email Assistants, AI Note-Taking Apps, Personalized News Aggregators, AI-Powered Language Learning Tools... (Placeholder details).'
    ]
  }
};

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug] : null;

  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  if (!post) {
    return (
      <>
        <Helmet>
          <title>Post Not Found | AIProductivityBooster.com</title>
          <meta name="description" content="The blog post you are looking for could not be found on AIProductivityBooster.com." />
        </Helmet>
        <motion.div 
          className="container mx-auto p-6 md:p-8 lg:p-12 min-h-screen font-sans flex flex-col items-center justify-center text-center"
          initial="hidden"
          animate="visible"
          variants={pageVariants}
        >
          <motion.h1 
            className="font-heading text-3xl sm:text-4xl font-bold mb-6 text-brand-primary tracking-tight"
            variants={itemVariants}
          >
            Oops! Post Not Found
          </motion.h1>
          <motion.p 
            className="font-sans text-base sm:text-lg text-text-secondary mb-8 max-w-md"
            variants={itemVariants} transition={{delay: 0.1}}
          >
            Sorry, the blog post you are looking for does not exist or the link is incorrect. Please check the URL or head back to our blog.
          </motion.p>
          <motion.div variants={itemVariants} transition={{delay: 0.2}}>
            <Link 
              to="/blog" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-accent hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-all duration-150 ease-in-out transform hover:scale-105"
            >
              &larr; Back to Blog
            </Link>
          </motion.div>
        </motion.div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${post.title} | AIProductivityBooster.com Blog`}</title>
        <meta name="description" content={post.excerpt || post.content[0].substring(0, 160)} />
        {post.category && <meta name="keywords" content={`AI, Productivity, ${post.category}, ${post.title}`} />}
        {/* Add Open Graph tags for social sharing */}
        <meta property="og:title" content={`${post.title} | AIProductivityBooster.com`} />
        <meta property="og:description" content={post.excerpt || post.content[0].substring(0, 160)} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://aiproductivitybooster.com/blog/${slug}`} /> */}
        {/* <meta property="og:image" content={post.imageUrl || "/default-blog-image.jpg"} /> */}
      </Helmet>
      <motion.div 
        className="container mx-auto p-6 md:p-8 lg:p-12 min-h-screen max-w-4xl font-sans"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
      >
        <motion.article 
          className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl"
          variants={itemVariants}
        >
          <header className="mb-8 pb-6 border-b border-gray-200">
            <motion.h1 
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-brand-primary leading-tight tracking-tight"
              variants={itemVariants}
            >
              {post.title}
            </motion.h1>
            {post.category && post.date && (
              <motion.p 
                className="font-sans text-sm text-text-secondary"
                variants={itemVariants} transition={{delay: 0.1}}
              >
                Posted in <Link to={`/blog/category/${post.category.toLowerCase().replace(/ /g, '-')}`} className="text-brand-accent hover:underline font-semibold transition-colors duration-300 ease-in-out">{post.category}</Link> on {post.date}
              </motion.p>
            )}
          </header>
          <motion.div 
            className="prose prose-lg sm:prose-xl max-w-none text-text-primary leading-relaxed link:text-brand-accent link:hover:underline"
            variants={itemVariants} transition={{delay: 0.2}}
          >
            {post.content.map((paragraph, index) => (
              <p key={index} className="mb-5">{paragraph}</p>
            ))}
          </motion.div>
          <motion.div 
            className="mt-10 pt-8 border-t border-gray-200"
            variants={itemVariants} transition={{delay: 0.3}}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center text-brand-accent hover:underline font-semibold font-sans transition-colors duration-300 ease-in-out group"
            >
              <span className="transition-transform duration-200 ease-in-out group-hover:-translate-x-1">&larr;</span> Back to All Posts
            </Link>
          </motion.div>
        </motion.article>
      </motion.div>
    </>
  );
};

export default BlogPostPage;

