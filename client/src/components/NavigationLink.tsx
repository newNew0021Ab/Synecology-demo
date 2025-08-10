import React from 'react';
import { Link, useLocation } from 'wouter';
import { addFromParam } from '@/lib/navigation';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ 
  href, 
  children, 
  className = "", 
  ...props 
}) => {
  const [location] = useLocation();

  const linkHref = addFromParam(href, location);

  return (
    <Link 
      href={linkHref} 
      className={className} 
      {...props}
    >
      {children}
    </Link>
  );
};

export { NavigationLink };
export default NavigationLink;