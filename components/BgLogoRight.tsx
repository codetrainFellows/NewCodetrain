import React from 'react';

interface BgLogoRightProps {
  className?: string;
}

export default function BgLogoRight({ className }: BgLogoRightProps) {
  return (
    <div className={className}>
      {/* Placeholder for background logo right */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="40" fill="currentColor" />
      </svg>
    </div>
  );
}
