import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'filled' | 'outlined';
  onClick?: () => void;
}

export default function Button({ children, className = '', variant = 'filled', onClick }: ButtonProps) {
  const baseClasses = 'font-bold px-5 sm:px-8 md:px-10 rounded-md transition-all';
  
  const variantClasses = {
    filled: 'bg-[#FFBE0C] text-[#1B1049] shadow-none hover:shadow-none',
    outlined: 'text-[#1B1049] bg-transparent shadow-none border border-[#1B1049] hover:bg-[#1B1049] hover:text-white'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
