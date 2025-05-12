import React from 'react';

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: 'primary' | 'secondary' | 'outline'; // For A/B testing different styles
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  id?: string; // For A/B testing tracking
}

const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  text,
  variant = 'primary',
  size = 'md',
  className = '',
  id
}) => {
  let baseClasses = 'font-bold font-heading py-3 px-8 rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105';
  
  if (variant === 'primary') {
    baseClasses += ' bg-brand-accent text-white hover:bg-opacity-90';
  } else if (variant === 'secondary') {
    baseClasses += ' bg-brand-secondary text-white hover:bg-opacity-90';
  } else if (variant === 'outline') {
    baseClasses += ' bg-transparent text-brand-accent border-2 border-brand-accent hover:bg-brand-accent hover:text-white';
  }

  if (size === 'sm') {
    baseClasses += ' text-sm py-2 px-4';
  } else if (size === 'lg') {
    baseClasses += ' text-xl py-4 px-10';
  }

  return (
    <a 
      href={href}
      className={`${baseClasses} ${className}`}
      target={href.startsWith('#') ? '_self' : '_blank'} 
      rel={href.startsWith('#') ? '' : 'noopener noreferrer nofollow'}
      id={id}
    >
      {text}
    </a>
  );
};

export default CTAButton;

// Example Usage:
/*
<CTAButton href="#subscribe" text="Subscribe Now" variant="primary" id="cta-subscribe-hero" />
<CTAButton href="/features" text="Learn More" variant="outline" size="sm" />
*/
