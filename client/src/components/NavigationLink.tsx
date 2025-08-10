
import React from 'react';
import { Link, useLocation } from 'wouter';
import { getUrlWithFrom } from '@/lib/navigation';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function NavigationLink({ href, children, className, ...props }: NavigationLinkProps) {
  const [location] = useLocation();
  
  const urlWithFrom = getUrlWithFrom(href, location);

  return (
    <Link href={urlWithFrom} className={className} {...props}>
      {children}
    </Link>
  );
}
