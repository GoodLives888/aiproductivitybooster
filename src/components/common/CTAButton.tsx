import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  isExternal?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  text,
  variant = 'primary',
  size = 'md',
  className = '',
  id,
  type = 'button',
  onClick,
  isExternal = false,
}) => {
  const baseStyle =
    'font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out inline-flex items-center justify-center shadow-md hover:shadow-lg';

  let variantStyle = '';
  switch (variant) {
    case 'primary':
      variantStyle = 'bg-brand-accent text-white hover:bg-opacity-90 focus:ring-brand-accent';
      break;
    case 'secondary':
      variantStyle = 'bg-brand-secondary text-white hover:bg-opacity-90 focus:ring-brand-secondary';
      break;
    case 'outline':
      variantStyle =
        'border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white focus:ring-brand-accent';
      break;
    case 'ghost':
      variantStyle = 'text-brand-accent hover:bg-brand-accent hover:bg-opacity-10 focus:ring-brand-accent';
      break;
    default:
      variantStyle = 'bg-brand-accent text-white hover:bg-opacity-90 focus:ring-brand-accent';
  }

  let sizeStyle = '';
  switch (size) {
    case 'sm':
      sizeStyle = 'px-4 py-2 text-sm';
      break;
    case 'md':
      sizeStyle = 'px-6 py-3 text-base';
      break;
    case 'lg':
      sizeStyle = 'px-8 py-4 text-lg';
      break;
    default:
      sizeStyle = 'px-6 py-3 text-base';
  }

  const combinedClassName = `${baseStyle} ${variantStyle} ${sizeStyle} ${className}`.trim();

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="block"
    >
      {text}
    </motion.span>
  );

  if (isExternal) {
    return (
      <motion.a
        href={href}
        id={id}
        className={combinedClassName}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {buttonContent}
      </motion.a>
    );
  }

  if (type === 'submit' || (onClick && !href.startsWith('#') && !href.startsWith('/'))) {
    return (
      <motion.button
        type={type}
        id={id}
        className={combinedClassName}
        onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      >
        {buttonContent}
      </motion.button>
    );
  }

  return (
    <Link to={href} id={id} className={combinedClassName}>
      {buttonContent}
    </Link>
  );
};

export default CTAButton;
