import React from 'react';
// import CTAButton from '../../components/common/CTAButton'; // CTAButton import commented out
import { Star, ThumbsUp, ThumbsDown, MessageSquare, ExternalLink, Tag, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

interface ProductReviewTemplateProps {
  productName: string;
  productImageUrl: string;
  overallRating: number; // e.g., 4.5
  reviewHeadline: string;
  authorName: string;
  datePublished: string; // e.g., "2023-10-26"
  pros: string[];
  cons: string[];
  detailedReview: string; // HTML string for complex content, or Markdown
  affiliateLink: string;
  tags?: string[];
  userVotes?: {
    upvotes: number;
    downvotes: number;
  };
  commentsCount?: number;
}

const ProductReviewTemplate: React.FC<ProductReviewTemplateProps> = ({
  productName,
  productImageUrl,
  overallRating,
  reviewHeadline,
  authorName,
  datePublished,
  pros,
  cons,
  detailedReview,
  affiliateLink,
  tags = [],
  userVotes = { upvotes: 0, downvotes: 0 },
  commentsCount = 0,
}) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <div className="flex items-center text-yellow-400">
        {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} fill="currentColor" size={20} />)}
        {halfStar && <Star key="half" fill="currentColor" size={20} style={{ clipPath: 'inset(0 50% 0 0)' }} />}
        {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} size={20} />)}
        <span className="ml-2 text-text-secondary text-sm">({rating.toFixed(1)})</span>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>{`${productName} Review | ${reviewHeadline}`}</title>
        <meta name="description" content={`In-depth review of ${productName}. Discover its pros, cons, and overall rating. ${reviewHeadline}`}/>
        {/* Add more specific SEO meta tags here, like Open Graph, structured data for reviews etc. */}
      </Helmet>
      <motion.article 
        className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8 bg-background-main text-text-primary font-sans"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* Header Section */}
        <motion.header 
          className="mb-10 border-b border-gray-200 pb-8"
          variants={sectionVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-brand-primary mb-4 leading-tight">{productName} Review: {reviewHeadline}</h1>
          <div className="flex flex-wrap items-center text-sm text-text-secondary mb-4">
            <div className="flex items-center mr-4 mb-2 sm:mb-0">
              <User size={16} className="mr-1.5" /> Author: {authorName}
            </div>
            <div className="flex items-center mr-4 mb-2 sm:mb-0">
              <Calendar size={16} className="mr-1.5" /> Published: {new Date(datePublished).toLocaleDateString()}
            </div>
            {renderStars(overallRating)}
          </div>
          {tags.length > 0 && (
            <div className="flex flex-wrap items-center text-xs text-text-tertiary mt-3">
              <Tag size={14} className="mr-1.5 text-brand-accent"/> 
              {tags.map((tag, index) => (
                <span key={index} className="mr-2 mb-1 bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md shadow-sm">{tag}</span>
              ))}
            </div>
          )}
        </motion.header>

        {/* Main Content: Image, Pros/Cons, Affiliate CTA */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12 items-start"
          variants={sectionVariants}
        >
          <div className="md:col-span-1 flex justify-center">
            <motion.img 
              src={productImageUrl} 
              alt={`${productName} product image`} 
              className="rounded-lg shadow-xl object-contain max-h-80 md:max-h-full border border-gray-200 p-2 bg-white"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold font-heading text-brand-secondary mb-4">Quick Verdict</h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-2 flex items-center"><ThumbsUp size={20} className="mr-2"/>Pros</h3>
                <ul className="list-disc list-inside space-y-1 text-text-secondary pl-2">
                  {pros.map((pro, index) => <li key={index}>{pro}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-2 flex items-center"><ThumbsDown size={20} className="mr-2"/>Cons</h3>
                <ul className="list-disc list-inside space-y-1 text-text-secondary pl-2">
                  {cons.map((con, index) => <li key={index}>{con}</li>)}
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center md:text-left">
              {/* <CTAButton 
                href={affiliateLink} 
                text={`Check Price for ${productName}`}
                variant="primary"
                size="lg"
                id={`cta-check-price-${productName.toLowerCase().replace(/\s+/g, '-')}`}
                className="w-full sm:w-auto shadow-xl transform hover:scale-105 transition-transform duration-200"
                isExternal={true}
              /> */}
              {/* CTAButton instance commented out - replaced with a standard link for now */}
              <a 
                href={affiliateLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-accent text-white hover:bg-opacity-90 focus:ring-brand-accent font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out inline-flex items-center justify-center shadow-md hover:shadow-lg px-8 py-4 text-lg w-full sm:w-auto shadow-xl transform hover:scale-105 transition-transform duration-200"
                id={`cta-check-price-${productName.toLowerCase().replace(/\s+/g, '-')}`}
              >
                Check Price for {productName} <ExternalLink size={18} className="ml-2"/>
              </a>
              <p className="text-xs text-text-tertiary mt-2">Affiliate link: We may earn a commission if you buy through this link.</p>
            </div>
          </div>
        </motion.div>

        {/* Detailed Review Section */}
        <motion.section 
          className="mb-12 bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-100"
          variants={sectionVariants}
        >
          <h2 className="text-2xl md:text-3xl font-semibold font-heading text-brand-secondary mb-6">In-Depth Review</h2>
          {/* Assuming detailedReview might contain HTML for rich text formatting */}
          <div className="prose prose-lg max-w-none text-text-primary leading-relaxed" dangerouslySetInnerHTML={{ __html: detailedReview }} />
        </motion.section>

        {/* User Interaction Section (Placeholder) */}
        <motion.section 
          className="text-center py-8 border-t border-gray-200 mt-12"
          variants={sectionVariants}
        >
          <h3 className="text-xl font-semibold text-text-secondary mb-4">Found this review helpful?</h3>
          <div className="flex justify-center items-center space-x-6 mb-6">
            <button className="flex items-center text-green-500 hover:text-green-600 transition-colors p-2 rounded-md hover:bg-green-50">
              <ThumbsUp size={24} className="mr-2" /> Helpful ({userVotes.upvotes})
            </button>
            <button className="flex items-center text-red-500 hover:text-red-600 transition-colors p-2 rounded-md hover:bg-red-50">
              <ThumbsDown size={24} className="mr-2" /> Not Helpful ({userVotes.downvotes})
            </button>
          </div>
          <div className="flex items-center justify-center text-text-secondary">
            <MessageSquare size={20} className="mr-2" /> {commentsCount} Comments (Placeholder)
          </div>
        </motion.section>

      </motion.article>
    </>
  );
};

export default ProductReviewTemplate;
