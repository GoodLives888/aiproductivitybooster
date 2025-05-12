import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, ExternalLink } from 'lucide-react';

interface ComparisonTableProps {
  title?: string;
  products: Array<{
    id: string; // Added for key prop
    name: string;
    logoUrl?: string; // Optional logo for each product
    features: Array<{ name: string; value: string | boolean; description?: string }>;
    price?: string;
    rating?: number; // e.g., 4.5
    affiliateLink?: string;
    ctaText?: string;
  }>;
  featureDescriptions?: Record<string, string>; // Optional descriptions for feature headers
}

const ProductComparisonTable: React.FC<ComparisonTableProps> = ({ title, products, featureDescriptions }) => {
  if (!products || products.length === 0) {
    return <p className="font-sans text-text-primary text-center py-10">No products to compare at the moment.</p>;
  }

  const featureKeys = Array.from(new Set(products.flatMap(p => p.features.map(f => f.name))));
  const headers = ['Product', ...featureKeys, 'Price', 'Rating', ' ']; // Last column for CTA/Link

  const tableVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.2 
      }
    },
  };

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const renderFeatureValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? 
        <CheckCircle className="h-6 w-6 text-green-500 mx-auto" /> : 
        <XCircle className="h-6 w-6 text-red-500 mx-auto" />;
    }
    return <span className="text-sm text-text-primary">{value}</span>;
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <div className="flex items-center justify-center">
        {[...Array(fullStars)].map((_, i) => <motion.svg key={`full-${i}`} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></motion.svg>)}
        {halfStar && <motion.svg key="half" className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" style={{ clipPath: 'inset(0 50% 0 0)' }} /></motion.svg>}
        {[...Array(emptyStars)].map((_, i) => <motion.svg key={`empty-${i}`} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></motion.svg>)}
      </div>
    );
  };

  return (
    <motion.div 
      className="my-10 p-4 sm:p-6 bg-white shadow-xl rounded-xl overflow-x-auto font-sans max-w-full mx-auto"
      variants={tableVariants}
      initial="hidden"
      animate="visible"
    >
      {title && 
        <motion.h2 
          className="font-heading text-3xl sm:text-4xl font-bold mb-8 text-brand-primary text-center tracking-tight"
          variants={headerVariants}
        >
          {title}
        </motion.h2>
      }
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
          <motion.thead variants={headerVariants} className="bg-gray-50">
            <tr>
              {headers.map((header, index) => (
                <th 
                  key={index} 
                  scope="col" 
                  className={`px-4 py-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider ${header === 'Product' ? 'min-w-[150px] sm:min-w-[200px]' : 'min-w-[100px] sm:min-w-[120px]'} ${header.trim() === '' ? 'w-[120px]' : ''}`}
                >
                  {header}
                  {featureDescriptions && featureDescriptions[header] && 
                    <p className="text-xs font-normal normal-case text-gray-500 mt-1">{featureDescriptions[header]}</p>}
                </th>
              ))}
            </tr>
          </motion.thead>
          <motion.tbody className="bg-white divide-y divide-gray-200" variants={tableVariants}>
            {products.map((product) => (
              <motion.tr 
                key={product.id} 
                className="hover:bg-brand-accent/10 transition-colors duration-200 ease-in-out"
                variants={rowVariants}
              >
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {product.logoUrl && <img className="h-10 w-10 rounded-full mr-3 object-contain" src={product.logoUrl} alt={`${product.name} logo`} />}
                    <span className="text-sm font-medium text-brand-secondary group-hover:text-brand-primary">{product.name}</span>
                  </div>
                </td>
                {featureKeys.map((key) => {
                  const feature = product.features.find(f => f.name === key);
                  return (
                    <td key={key} className="px-4 py-4 whitespace-normal text-center align-middle">
                      {feature ? renderFeatureValue(feature.value) : <span className="text-gray-400">-</span>}
                    </td>
                  );
                })}
                <td className="px-4 py-4 whitespace-nowrap text-sm text-text-primary text-center">{product.price || 'N/A'}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-text-primary text-center">
                  {product.rating ? 
                    <div className="flex flex-col items-center">
                      {renderStars(product.rating)}
                      <span className="text-xs text-gray-500 mt-1">({product.rating.toFixed(1)}/5)</span>
                    </div> 
                    : 'N/A'}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {product.affiliateLink ? (
                    <motion.a 
                      href={product.affiliateLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-accent hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-all duration-150 ease-in-out transform hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {product.ctaText || 'View Details'}
                      <ExternalLink size={16} className="ml-2" />
                    </motion.a>
                  ) : <span className="text-gray-400">-</span>}
                </td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductComparisonTable;

// Example Usage (can be placed on a page component):
/*
const exampleProductsForTable = [
  {
    id: 'alpha',
    name: 'AI Tool Alpha',
    logoUrl: '/path/to/alpha-logo.png', // Replace with actual path or URL
    features: [
      { name: 'Core Feature 1', value: true, description: 'Enables X functionality' },
      { name: 'Core Feature 2', value: 'Advanced', description: 'Provides Y capabilities' },
      { name: 'Speed', value: 'Fast' },
      { name: 'Ease of Use', value: true },
    ],
    price: '$49/mo',
    rating: 4.5,
    affiliateLink: '#affiliate-alpha',
    ctaText: 'Get Alpha'
  },
  {
    id: 'beta',
    name: 'AI Tool Beta',
    logoUrl: '/path/to/beta-logo.png', // Replace with actual path or URL
    features: [
      { name: 'Core Feature 1', value: true, description: 'Enables X functionality' },
      { name: 'Core Feature 2', value: 'Basic', description: 'Provides Y capabilities' },
      { name: 'Speed', value: 'Medium' },
      { name: 'Ease of Use', value: false },
    ],
    price: '$29/mo',
    rating: 4.0,
    affiliateLink: '#affiliate-beta',
    ctaText: 'Try Beta'
  },
  {
    id: 'gamma',
    name: 'AI Tool Gamma',
    logoUrl: '/path/to/gamma-logo.png', // Replace with actual path or URL
    features: [
      { name: 'Core Feature 1', value: false, description: 'Enables X functionality' },
      { name: 'Core Feature 2', value: 'Pro', description: 'Provides Y capabilities' },
      { name: 'Speed', value: 'Very Fast' },
      { name: 'Ease of Use', value: true },
    ],
    price: '$99/mo',
    rating: 4.8,
    affiliateLink: '#affiliate-gamma',
  },
];

const featureDescriptionsForTable = {
  'Core Feature 1': 'This is the primary function of the tool.',
  'Core Feature 2': 'Secondary capabilities offered.',
  'Speed': 'Processing speed of the AI model.',
  'Ease of Use': 'User-friendliness of the interface.'
};

<ProductComparisonTable 
  title="Compare Top AI Productivity Tools" 
  products={exampleProductsForTable} 
  featureDescriptions={featureDescriptionsForTable} 
/>
*/

