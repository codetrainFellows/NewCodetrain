import React from 'react';

interface BgLogoLeftProps {
  className?: string;
}

export default function BgLogoLeft({ className }: BgLogoLeftProps) {
  return (
    <div className={className}>
      {/* Placeholder for background logo left */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="10" y="10" width="80" height="80" fill="currentColor" />
      </svg>
    </div>
  );
}
