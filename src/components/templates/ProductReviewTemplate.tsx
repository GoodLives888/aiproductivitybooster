import React from 'react';
import CTAButton from '../../components/common/CTAButton';
import placeholderImage from '../../assets/images/ai_feature_graphic_sample_1.png';
import { motion } from 'framer-motion';
import { Star, ChevronRight } from 'lucide-react';

interface ProductReviewProps {
  productName: string;
  tagline: string;
  mainImageUrl?: string;
  introduction: string[];
  features: Array<{ name: string; description: string; rating?: number }>;
  pros: string[];
  cons: string[];
  pricingTiers?: Array<{ tierName: string; price: string; features: string[] }>;
  overallRating: number;
  finalVerdict: string[];
  affiliateLink: string;
  ctaText?: string;
}

const ProductReviewTemplate: React.FC<ProductReviewProps> = ({
  productName,
  tagline,
  mainImageUrl = placeholderImage,
  introduction,
  features,
  pros,
  cons,
  pricingTiers,
  overallRating,
  finalVerdict,
  affiliateLink,
  ctaText = `Get ${productName} Now`,
}) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0; // Simplified: no actual half star icon, just accounts for it
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <div className="flex items-center text-yellow-400">
        {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} size={20} fill="currentColor" strokeWidth={0} />)}
        {halfStar && <Star key="half" size={20} fill="currentColor" strokeWidth={0} style={{ clipPath: 'inset(0 50% 0 0)' }} />}
        {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} size={20} className="text-gray-300" fill="currentColor" strokeWidth={0} />)}
        <span className="ml-2 text-sm text-text-secondary">({rating.toFixed(1)})</span>
      </div>
    );
  };

  return (
    <motion.article 
      className="my-12 p-6 md:p-8 lg:p-10 bg-white shadow-2xl rounded-xl font-sans max-w-4xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <header className="mb-8 pb-6 border-b border-gray-200">
        <motion.h1 
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary mb-3 tracking-tight"
          variants={itemVariants}
        >
          {productName} Review
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl text-text-secondary italic"
          variants={itemVariants}
          transition={{ delay: 0.1 }}
        >
          {tagline}
        </motion.p>
      </header>

      {mainImageUrl && (
        <motion.div 
          className="mb-10 flex justify-center"
          variants={itemVariants}
          transition={{ delay: 0.2 }}
        >
          <img src={mainImageUrl} alt={`${productName} main visual`} className="w-full max-w-xl h-auto max-h-[450px] object-contain rounded-lg bg-gray-100 p-1 shadow-md" />
        </motion.div>
      )}

      <motion.section 
        className="mb-8 prose prose-lg sm:prose-xl max-w-none text-text-primary leading-relaxed"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-secondary mt-8 mb-5">Introduction</h2>
        {introduction.map((paragraph, index) => (
          <motion.p key={`intro-${index}`} className="mb-4" variants={itemVariants} transition={{ delay: index * 0.1 }}>{paragraph}</motion.p>
        ))}
      </motion.section>

      <motion.section 
        className="mb-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-secondary mt-8 mb-6">Key Features</h2>
        <ul className="space-y-6">
          {features.map((feature, index) => (
            <motion.li 
              key={`feature-${index}`} 
              className="p-6 bg-background-alt rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-brand-accent"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.15 }}
            >
              <h3 className="font-heading text-xl sm:text-2xl font-medium text-brand-primary mb-2">{feature.name}</h3>
              {feature.rating && renderStars(feature.rating)}
              <p className="text-text-secondary leading-relaxed mt-2">{feature.description}</p>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <motion.div 
        className="grid md:grid-cols-2 gap-10 mb-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <section>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-green-600 mt-8 mb-5">Pros</h2>
          <ul className="space-y-3 text-text-primary">
            {pros.map((pro, index) => (
              <motion.li key={`pro-${index}`} className="flex items-start" variants={itemVariants} transition={{ delay: index * 0.1 }}>
                <Star size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>{pro}</span>
              </motion.li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-red-600 mt-8 mb-5">Cons</h2>
          <ul className="space-y-3 text-text-primary">
            {cons.map((con, index) => (
              <motion.li key={`con-${index}`} className="flex items-start" variants={itemVariants} transition={{ delay: index * 0.1 }}>
                //<X size={18} className="text-red-500 mr-3 mt-1 flex-shrink-0" /> {/* Using X from lucide for cons */}
                <span>{con}</span>
              </motion.li>
            ))}
          </ul>
        </section>
      </motion.div>

      {pricingTiers && pricingTiers.length > 0 && (
        <motion.section 
          className="mb-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-secondary mt-8 mb-8 text-center">Pricing Plans</h2>
          <div className={`grid md:grid-cols-1 lg:grid-cols-${Math.min(pricingTiers.length, 3)} gap-8`}>
            {pricingTiers.map((tier, index) => (
              <motion.div 
                key={`tier-${index}`} 
                className="p-8 bg-background-alt rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-brand-accent flex flex-col"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.15 }}
              >
                <h3 className="font-heading text-2xl font-bold text-brand-primary mb-4 text-center">{tier.tierName}</h3>
                <p className="text-4xl font-bold text-brand-accent mb-6 text-center">{tier.price}</p>
                <ul className="space-y-3 text-text-secondary mb-8 flex-grow">
                  {tier.features.map((feature, fIndex) => (
                    <li key={`tier-feature-${fIndex}`} className="flex items-start">
                      <ChevronRight size={20} className="text-brand-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <CTAButton 
                  href={affiliateLink} 
                  text={`Choose ${tier.tierName}`} 
                  variant={index === 1 && pricingTiers.length > 1 ? "primary" : "secondary"} // Highlight middle plan
                  className="w-full text-center block mt-auto transform hover:scale-105 transition-transform duration-200"
                  id={`cta-pricing-${tier.tierName.toLowerCase().replace(/\s+/g, '-')}`}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      <motion.section 
        className="mt-10 pt-8 border-t border-gray-200"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-secondary mb-4">Overall Rating & Verdict</h2>
        <div className="mb-6 flex items-center">
          <span className="font-heading text-xl font-semibold text-brand-primary mr-4">Our Score:</span>
          {renderStars(overallRating)}
        </div>
        <div className="prose prose-lg sm:prose-xl max-w-none text-text-primary leading-relaxed">
          {finalVerdict.map((paragraph, index) => (
            <motion.p key={`verdict-${index}`} className="mb-4" variants={itemVariants} transition={{ delay: index * 0.1 }}>{paragraph}</motion.p>
          ))}
        </div>
      </motion.section>

      <motion.div 
        className="mt-12 text-center"
        variants={itemVariants}
        transition={{ delay: 0.5 }}
      >
        <CTAButton 
          href={affiliateLink} 
          text={ctaText} 
          variant="primary" 
          size="lg" 
          id={`cta-review-main-${productName.toLowerCase().replace(/\s+/g, '-')}`}
          className="transform hover:scale-105 transition-transform duration-200 shadow-xl"
        />
      </motion.div>
    </motion.article>
  );
};

export default ProductReviewTemplate;

