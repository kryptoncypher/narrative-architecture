import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function FadeIn({ 
  children, 
  delay = 0, 
  className = '' 
}: { 
  children: React.ReactNode, 
  delay?: number, 
  className?: string 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 1.2, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Button({ 
  children, 
  variant = 'primary', 
  href, 
  className = '' 
}: { 
  children: React.ReactNode, 
  variant?: 'primary' | 'secondary', 
  href?: string,
  className?: string 
}) {
  const baseStyle = "group relative inline-flex items-center justify-center overflow-hidden px-8 py-3 text-sm tracking-widest uppercase transition-all duration-500 ease-out";
  
  const variants = {
    primary: "border border-[var(--color-brand-accent)] text-[var(--color-brand-light)] hover:bg-[var(--color-brand-accent-hover)] hover:text-white shadow-[0_0_15px_rgba(140,43,43,0.1)] hover:shadow-[0_0_25px_rgba(140,43,43,0.4)]",
    secondary: "border border-zinc-800 text-zinc-400 hover:text-[var(--color-brand-light)] hover:border-zinc-500"
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
}

export function Section({ 
  children, 
  id, 
  className = '' 
}: { 
  children: React.ReactNode, 
  id?: string, 
  className?: string 
}) {
  return (
    <section id={id} className={`py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto w-full ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <h2 className={`font-serif text-3xl md:text-5xl text-[var(--color-brand-light)] font-medium tracking-wide mb-16 leading-tight ${className}`}>
      {children}
    </h2>
  );
}
