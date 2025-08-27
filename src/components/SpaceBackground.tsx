import React from 'react';

const SpaceBackground = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Simple Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-violet-950/20 to-black">
        {/* Simple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/5 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SpaceBackground;